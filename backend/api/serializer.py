from django.contrib.auth.password_validation import validate_password

from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from userauths.models import Profile, User


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add extra data to the token
        token['full_name'] = user.full_name
        token['email'] = user.email
        token['username'] = user.username

        return token

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['full_name', 'email', 'password', 'password2']
    
    # validator method for 2 passwords are same
    def validate(self, attrs):
        if attrs['password']!= attrs['password2']:
            raise serializers.ValidationError("Passwords fields didn't match.")
        return attrs
    # method for creating a new user based on the validated data
    def create(self, validated_data):
        user = User.objects.create(full_name=validated_data['full_name'], email=validated_data['email'])
        email_username, _ = user.email.split('@')
        user.username = email_username
        user.set_password(validated_data['password'])
        user.save()

        return user
        


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'