import random
from decimal import Decimal

from django.shortcuts import render, redirect
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings
import stripe.error

from api import serializer as api_serializer
from api import models as api_models
from userauths.models import User, Profile

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response

import stripe
import requests

stripe.api_key = settings.STRIPE_SECRET_KEY
PAYPAL_CLIENT_ID = settings.PAYPAL_CLIENT_ID
PAYPAL_SECRET_ID = settings.PAYPAL_SECRET_ID

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


class CategoryListAPIView(generics.ListAPIView):
    # when evere we use the ListAPIView we need to know that we try to retrieve a list of items from the database
    queryset = api_models.Category.objects.filter(active=True)
    serializer_class = api_serializer.CategorySerializer
    permission_classes = [AllowAny] # means any type of user authenticated and unauthenticated can access this view.


class CourseListAPIView(generics.ListAPIView):
    queryset = api_models.Course.objects.filter(platform_status="Published", teacher_course_status="Published")
    serializer_class = api_serializer.CourseSerializer
    permission_classes = [AllowAny]


class CourseDetailAPIView(generics.RetrieveAPIView):
    # so using the RetrieveAPIView it only retrieves only one single object
    queryset = api_models.Course.objects.filter(platform_status="Published", teacher_course_status="Published")
    serializer_class = api_serializer.CourseSerializer
    permission_classes = [AllowAny]

    # Here we override the default get method -By doing that we can create our own custom object over here
    # so when we call this api view it returns the below custom get method return value
    def get_object(self):
        slug = self.kwargs['slug'] # it takes keyword arguments "slug" value from url
        # get the one course by slug, platform status and teacher status
        course = api_models.Course.objects.get(slug=slug, platform_status="Published", teacher_course_status="Published")
        return course
    

class CartAPIView(generics.CreateAPIView):
    # CartAPIView is a Django REST Framework API view that allows users to add, create or update items in a cart.
    # when evere we use the CreateAPIView we need to know that we try to create a new item in the database
    queryset = api_models.Cart.objects.all()
    serializer_class = api_serializer.CartSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        # Extract Data from the Request
        course_id = request.data['course_id']
        user_id = request.data['user_id']
        price = request.data['price']
        country_name = request.data['country_name']
        cart_id = request.data['cart_id']

        # Fetch Related Objects
        course = api_models.Course.objects.filter(id=course_id).first()

        if user_id != "undefined":
            user = User.objects.filter(id=user_id).first()
        else:
            user = None

        # Handle Country and Tax Calculation
        try:
            country_object = api_models.Country.objects.filter(name=country_name).first()
            country = country_object.name
        except:
            country_object = None
            country = "United States"

        if country_object:
            tax_rate = country_object.tax_rate / 100
        else:
            tax_rate = 0

        # Check if Cart Exists
        cart = api_models.Cart.objects.filter(cart_id=cart_id, course=course).first()

        # Update or Create the Cart
        if cart:
            cart.course = course
            cart.user = user
            cart.price = price
            cart.tax_fee = Decimal(price) * Decimal(tax_rate)
            cart.country = country
            cart.cart_id = cart_id
            cart.total = Decimal(cart.price) + Decimal(cart.tax_fee)
            cart.save()

            return Response({"message": "Cart Updated Successfully"}, status=status.HTTP_200_OK)
        
        else:
            cart = api_models.Cart()

            cart.course = course
            cart.user = user
            cart.price = price
            cart.tax_fee = Decimal(price) * Decimal(tax_rate)
            cart.country = country
            cart.cart_id = cart_id
            cart.total = Decimal(cart.price) + Decimal(cart.tax_fee)
            cart.save()

            return Response({"message": "Cart Created Successfully"}, status=status.HTTP_201_CREATED)


class CartListAPIView(generics.ListAPIView):
    # CartListAPIView is a API view that allows users to retrieve their cart items. filtered by the cart_id.
    # ListAPIView is a Django REST Framework API view that allows users to retrieve a list of objects
    serializer_class = api_serializer.CartSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        # get_queryset() method is used to define a custom "queryset" for the view
        cart_id = self.kwargs['cart_id']
        # self.kwargs is a dictionary that holds keyword arguments passed to the view - cart_id is expected to be provided as a URL parameter.
        # For example, if the URL pattern is /api/cart/<cart_id>/, then cart_id will be taken from the URL - path('api/cart/<str:cart_id>/')
        queryset = api_models.Cart.objects.filter(cart_id=cart_id)
        return queryset

class CartItemDeleteAPIView(generics.DestroyAPIView):
    serializer_class = api_serializer.CartSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        cart_id = self.kwargs['cart_id']
        item_id = self.kwargs['item_id']

        return api_models.Cart.objects.filter(cart_id=cart_id, id=item_id).first()
    

class CartStatsAPIView(generics.RetrieveAPIView):
    # This api view is for send us data back to the frontend like total, total amount, tax fee etc.
    serializer_class = api_serializer.CartSerializer
    permission_classes = [AllowAny]
    lookup_field = 'cart_id' 
    # lookup_field - By specifying lookup_field = 'cart_id', the view will look for the cart_id in the URL to retrieve the corresponding Cart instance. - 
    # This allows you to access the cart using its unique identifier (cart_id) rather than the default primary key (id).

    def get_queryset(self):
        cart_id = self.kwargs['cart_id']
        queryset = api_models.Cart.objects.filter(cart_id=cart_id)
        return queryset
    
    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()

        total_price = 0.00
        total_tax = 0.00
        total_total = 0.00

        for cart_item in queryset:
            total_price += float(cart_item.price)
            total_tax += float(cart_item.tax_fee)
            total_total += round(float(cart_item.total), 2)

        data = {
            "price": total_price,
            "tax": total_tax,
            "total": total_total,
            "items_count": queryset.count()
        }

        return Response(data, status=status.HTTP_200_OK)


class CreateOrderAPIView(generics.CreateAPIView):
    queryset = api_models.CartOrder.objects.all()
    serializer_class = api_serializer.CartOrderSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        # Extract Data from the Request - Front end developer should pass all this data
        full_name = request.data['full_name']
        email = request.data['email']
        country = request.data['country']
        cart_id = request.data['cart_id']
        user_id = request.data['user_id']

        if user_id != 0:
            user = User.objects.get(id=user_id)
        else:
            user = None

        cart_items = api_models.Cart.objects.filter(cart_id=cart_id)

        total_price = Decimal(0.00)
        total_tax = Decimal(0.00)
        total_initial_total = Decimal(0.00)
        total_total = Decimal(0.00)

        order = api_models.CartOrder.objects.create(
            full_name=full_name,
            email=email,
            country=country,
            student=user
        )

        for c in cart_items:
            api_models.CartOrderItem.objects.create(
                order=order,
                course=c.course,
                price=c.price,
                tax_fee=c.tax_fee,
                total=c.total,
                initial_total = c.total,
                teacher = c.course.teacher
            )

            total_price += Decimal(c.price)
            total_tax += Decimal(c.tax_fee)
            total_initial_total += Decimal(c.total)
            total_total += Decimal(c.total)

            order.teachers.add(c.course.teacher)
        
        order.sub_total = total_price
        order.tax_fee = total_tax
        order.initial_total = total_initial_total
        order.total = total_total

        order.save()

        return Response({"message": "Order Created Successfully"}, status=status.HTTP_201_CREATED)
    

class checkoutAPIView(generics.RetrieveAPIView):
    queryset = api_models.CartOrder.objects.all()   
    serializer_class = api_serializer.CartOrderSerializer
    permission_classes = [AllowAny]
    lookup_field = 'oid'


class CouponApplyAPIView(generics.CreateAPIView):
    serializer_class = api_serializer.CouponSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        # Extracting Data:
        order_oid = request.data['order_oid']
        coupon_code = request.data['coupon_code']

        # Fetching the Order and Coupon:
        order = api_models.CartOrder.objects.get(oid=order_oid)
        coupon = api_models.Coupon.objects.get(code=coupon_code)

        # Checking if the Coupon Exists:
        if coupon:
            order_items = api_models.CartOrderItem.objects.filter(order=order, teacher=coupon.teacher)
            for i in order_items:
                if not coupon in i.coupons.all():
                    discount = i.total * coupon.discount / 100
                    i.total -= discount
                    i.price -= discount
                    i.saved += discount
                    i.applied_coupon = True
                    i.coupons.add(coupon)

                    order.coupons.add(coupon)
                    order.total -= discount
                    order.sub_total -= discount
                    order.saved += discount

                    i.save()
                    order.save()

                    # Check if `order.student` is a valid User instance
                    if order.student:
                        coupon.used_by.add(order.student)
                    else:
                        return Response({"message": "No student associated with this order"}, status=status.HTTP_400_BAD_REQUEST)

                    return Response({"message": "Coupon Found and Activated"}, status=status.HTTP_201_CREATED)
                else:
                    return Response({"message": "Coupon Already Applied"}, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Coupon Not Found"}, status=status.HTTP_404_NOT_FOUND)


class StripeCheckoutAPIView(generics.CreateAPIView):
    serializer_class = api_serializer.CartOrderSerializer
    permission_classes = [AllowAny]


    def create(self, request, *args, **kwargs):
        order_oid = self.kwargs['order_oid']
        order = api_models.CartOrder.objects.get(oid=order_oid)

        if not order:
            return Response({"message": "Order not found"}, status=status.HTTP_404_NOT_FOUND)

        try:
            checkout_session = stripe.checkout.Session.create(
                customer_email= order.email,
                payment_method_types=['card'],
                line_items=[
                    {
                        'price_data': {
                            'currency': 'inr',
                            'product_data': {
                                'name': order.full_name
                            },
                            'unit_amount': int(order.total * 100),
                        },
                        'quantity': 1,
                    }
                ],
                mode='payment',
                success_url=settings.FRONTEND_SITE_URL + '/payment-success/' + order.oid + '?session_id={CHECKOUT_SESSION_ID}',
                cancel_url=settings.FRONTEND_SITE_URL + '/payment-failed/',
            )
            
            print("checkout_session =====", checkout_session)
            order.stripe_session_id = checkout_session.id

            return redirect(checkout_session.url) # stripe checkout session having a URL - there will redirect
        except stripe.error.StripeError as e:
            return Response({"message": f"Something went wrong when trying to make payment. Error: {str(e)}"})


def get_access_token(client_id, secret_key):
    token_url = "https://api.sandbox.paypal.com/v1/oauth/token"
    data = {'grant_type': 'client_credentials'}
    auth = (client_id, secret_key)
    response = requests.post(token_url, data=data, auth=auth)

    if response.status_code == 200:
        return response.json()['access_token']
    else:
        raise Exception(f'Failed to get access token from paypal {response.status_code}')
    

class PaymentSuccessAPIView(generics.CreateAPIView):
    serializer_class = api_serializer.CartOrderSerializer
    queryset = api_models.CartOrder.objects.all()


    def create(self, request, *args, **kwargs):
        order_oid = request.data['order_oid']
        session_id = request.data['session_id']
        paypal_order_id = request.data['paypal_order_id']

        order = api_models.CartOrder.objects.get(oid=order_oid)
        order_items = api_models.CartOrderItem.objects.filter(order=order)

        # Paypal payment success

        if paypal_order_id != "null":
            paypal_api_url = f"https://api-m.sandbox.paypal.com/v2/checkout/orders/{paypal_order_id}"
            headers = {
                'Content-Type': 'application/json',
                'Authorization': f'Bearer {get_access_token(settings.PAYPAL_CLIENT_ID, settings.PAYPAL_SECRET_ID)}'
            }
            response = requests.get(paypal_api_url, headers=headers)
            if response.status_code == 200:
                paypal_order_data = response.json()
                paypal_payment_status = paypal_order_data['status']
                if paypal_payment_status == 'COMPLETED':
                    if order.payment_status == "Processing":
                        order.payment_status = "Paid"
                        order.save()

                        api_models.Notification.objects.create(user=order.student, order=order, type="Course Enrollment Completed")
                        
                        for o in order_items:
                            api_models.Notification.objects.create(
                                teacher=o.teacher,
                                order=order,
                                order_item=o,
                                type="New Order",
                            )
                            api_models.EnrolledCourse.objects.create(
                                course=o.course,
                                teacher=o.teacher,
                                user=order.student,
                                order_item=o,
                            ) 
                        
                        return Response({"message": "Payment Successful"})
                    else:
                        return Response({"message": "Payment Already Paid"}, status=status.HTTP_200_OK)
                else:
                    return Response({"message": "Payment Failed"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({"message": f"Paypal Error Occured. Error: {response.status_code}"}, status=status.HTTP_400_BAD_REQUEST)


        # Stripe payment success

        if session_id != 'null':
            session = stripe.checkout.Session.retrieve(session_id)
            if session.payment_status == 'paid':
                if order.payment_status == "Processing":
                    order.payment_status = "Paid"
                    order.save()

                    api_models.Notification.objects.create(user=order.student, order=order, type="Course Enrollment Completed")
                        
                    for o in order_items:
                        api_models.Notification.objects.create(
                            teacher=o.teacher,
                            order=order,
                            order_item=o,
                            type="New Order",
                        )
                        api_models.EnrolledCourse.objects.create(
                            course=o.course,
                            teacher=o.teacher,
                            user=order.student,
                            order_item=o,
                        )
                    return Response({"message": "Payment Successful"}, status=status.HTTP_200_OK)
                else:
                    return Response({"message": "Payment Already Paid"}, status=status.HTTP_200_OK)
            else:
                return Response({"message": "Payment Failed"}, status=status.HTTP_400_BAD_REQUEST)


class SearchCourseAPIView(generics.ListAPIView):
    serializer_class = api_serializer.CourseSerializer
    permission_classes = [AllowAny]
    

    def get_queryset(self):
        query = self.request.GET.get('query')
        return api_models.Course.objects.filter(title__contains=query, platform_status="Published", teacher_course_status="Published")

