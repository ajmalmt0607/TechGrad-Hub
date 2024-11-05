import random

from django.shortcuts import render
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings

from api import serializer as api_serializer
from api import models as api_models
from userauths.models import User, Profile

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response 

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = api_serializer.MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny] # means both authenticated and not authenticated user can access this view
    serializer_class = api_serializer.RegisterSerializer

def generate_random_otp(length=7):
    otp = ''.join([str(random.randint(0, 9)) for _ in range(length)])
    # Each time the loop runs, random.randint(0, 9) generates a new random integer between 0 and 9.
    # This joins the list of digits into a single string. For example, if the list is ['3', '5', '8', '1', '6', '4', '9'], the join() function converts it into '3581649'.
    return otp

class PasswordResetEmailVerifyAPIView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class = api_serializer.UserSerializer

    def get_object(self):
        email = self.kwargs.get('email')  # Get email from URL parameters

        # Find the user by email
        user = User.objects.filter(email=email).first()

        if user:
            uuidb64 = user.pk  # Use the primary key (UUID in this case)
            refresh = RefreshToken.for_user(user)  # Create a JWT refresh token
            refresh_token = str(refresh.access_token)

            user.refresh_token = refresh_token
            user.otp = generate_random_otp()  # Generate a random OTP
            user.save()  # Save the updated user details

            # Create the password reset link with query parameters
            link = f"http://localhost:5173/create-new-password/?otp={user.otp}&uuidb64={uuidb64}&refresh_token={refresh_token}"

            # Prepare the email context for the template
            context = {
                "link": link,
                "username": user.username,
            }

            # Email subject and bodies (text and HTML)
            subject = 'Password Reset Email'
            text_body = render_to_string("email/password_reset.txt", context)
            html_body = render_to_string("email/password_reset.html", context)

            # Send the email using Django's EmailMultiAlternatives
            msg = EmailMultiAlternatives(
                subject=subject,
                from_email=settings.DEFAULT_FROM_EMAIL,  # Use the default email from settings
                to=[user.email],  # Send to the user's email
                body=text_body  # The plain text body
            )

            # Attach the HTML body as an alternative
            msg.attach_alternative(html_body, "text/html")
            msg.send()  # Send the email

            print("Password reset link:", link)

        return user





class PasswordChangeAPIView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = api_serializer.UserSerializer

    def create(self, request, *args, **kwargs):
        otp = request.data['otp']
        uuidb64 = request.data['uuidb64']
        password = request.data['password']

        user = User.objects.get(id=uuidb64, otp=otp) # Here OTP set to the user when reset email generated
        if user:
            user.set_password(password)
            user.otp = ""
            user.save()

            return Response({"message": "Password changed successfully"},status=status.HTTP_201_CREATED)
        else:
            return Response({"message": "User Does Not Exist"}, status=status.HTTP_404_NOT_FOUND)
