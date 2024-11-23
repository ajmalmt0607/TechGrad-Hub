from django.contrib.auth.password_validation import validate_password
from api import models as api_models

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

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = api_models.Category
        fields = ['title', 'image', 'slug', 'course_count']

class TeacherSerializer(serializers.ModelSerializer):

    class Meta:
        model = api_models.Teacher
        fields = ["user","image", "full_name", "bio", "facebook","twitter","linkedin","about","country","students","courses","review",]


class VariantItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = api_models.VariantItem
        fields = "__all__"
    
    def __init__(self, *args, **kwargs):
        super(VariantItemSerializer, self ).__init__(*args, **kwargs)
        request = self.context.get("request")
        if request and request.method == "POST":
            self.Meta.depth = 0
        else:
            self.Meta.depth = 3

class VariantSerializer(serializers.ModelSerializer):
    variant_items = VariantItemSerializer(many=True)

    class Meta:
        model = api_models.Variant
        fields = "__all__"
    
    def __init__(self, *args, **kwargs):
        super(VariantSerializer, self ).__init__(*args, **kwargs)
        request = self.context.get("request")
        if request and request.method == "POST":
            self.Meta.depth = 0
        else:
            self.Meta.depth = 3


class Question_Answer_MessageSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(many=False)
    
    class Meta:
        model = api_models.Question_Answer_Message
        fields = "__all__"

class Question_AnswerSerializer(serializers.ModelSerializer):
    messages = Question_Answer_MessageSerializer(many=True)
    profile = ProfileSerializer(many=False)

    class Meta:
        model = api_models.Question_Answer
        fields = "__all__"

class CartSerializer(serializers.ModelSerializer):

    class Meta:
        model = api_models.Cart
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(CartSerializer, self ).__init__(*args, **kwargs)
        request = self.context.get("request")
        if request and request.method == "POST":
            self.Meta.depth = 0
        else:
            self.Meta.depth = 3

class CartOrderItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = api_models.CartOrderItem
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(CartOrderItemSerializer, self ).__init__(*args, **kwargs)
        request = self.context.get("request")
        if request and request.method == "POST":
            self.Meta.depth = 0
        else:
            self.Meta.depth = 3

class CartOrderSerializer(serializers.ModelSerializer):
    order_items = CartOrderItemSerializer(many=True)

    class Meta:
        model = api_models.CartOrder
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(CartOrderSerializer, self ).__init__(*args, **kwargs)
        request = self.context.get("request")
        if request and request.method == "POST":
            self.Meta.depth = 0
        else:
            self.Meta.depth = 3

class CertificateSerializer(serializers.ModelSerializer):

    class Meta:
        model = api_models.Certificate
        fields = "__all__"

class CompletedLessonSerializer(serializers.ModelSerializer):

    class Meta:
        model = api_models.CompletedLesson
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(CompletedLessonSerializer, self ).__init__(*args, **kwargs)
        request = self.context.get("request")
        if request and request.method == "POST":
            self.Meta.depth = 0
        else:
            self.Meta.depth = 3
    

class NoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = api_models.Note
        fields = "__all__"

class ReviewSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(many=False)

    class Meta:
        model = api_models.Review
        fields = "__all__"

class NotificationSerializer(serializers.ModelSerializer):

    class Meta:
        model = api_models.Notification
        fields = "__all__"

class CouponSerializer(serializers.ModelSerializer):

    class Meta:
        model = api_models.Coupon
        fields = "__all__"

class WhishlistSerializer(serializers.ModelSerializer):

    class Meta:
        model = api_models.Whishlist
        fields = "__all__"

class CountrySerializer(serializers.ModelSerializer):

    class Meta:
        model = api_models.Country
        fields = "__all__"

class EnrolledCourseSerializer(serializers.ModelSerializer):
    lectures = VariantItemSerializer(many=True, read_only=True)
    completed_lesson = CompletedLessonSerializer(many=True, read_only=True)
    curriculum = VariantSerializer(many=True, read_only=True)
    note = NoteSerializer(many=True, read_only=True)
    question_answer = Question_AnswerSerializer(many=True, read_only=True)
    review = ReviewSerializer(many=False, read_only=True)

    class Meta:
        model = api_models.EnrolledCourse
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(EnrolledCourseSerializer, self ).__init__(*args, **kwargs)
        request = self.context.get("request")
        if request and request.method == "POST":
            self.Meta.depth = 0
        else:
            self.Meta.depth = 3

class CourseSerializer(serializers.ModelSerializer):
    # many=True means EnrolledCourse has many students
    students = EnrolledCourseSerializer(many=True)
    curriculum = VariantSerializer(many=True)
    lectures = VariantItemSerializer(many=True)
    reviews = ReviewSerializer(many=True) # But we can't go depth so in api result we didnt get data

    class Meta:
        model = api_models.Course
        fields = ["id","category","teacher","file","image","title","description","price","language","level","platform_status","teacher_course_status","featured","course_id","slug","date","students","curriculum","lectures","students","curriculum","lectures","average_rating","rating_count","reviews",]

    def __init__(self, *args, **kwargs):
        super(CourseSerializer, self ).__init__(*args, **kwargs)
        request = self.context.get("request")
        if request and request.method == "POST":
            self.Meta.depth = 0
        else:
            self.Meta.depth = 3


class StudentSummarySerializer(serializers.Serializer): # This is not model serializer
    total_courses = serializers.IntegerField(default=0)
    completed_lessons = serializers.IntegerField(default=0)
    achieved_certificates = serializers.IntegerField(default=0)