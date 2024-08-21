from django.shortcuts import render

# Import the User model from Django's built-in authentication system
from django.contrib.auth.models import User

# Import generics from Django REST framework for creating generic class-based views
from rest_framework import generics

# Import the UserSerializer defined in the serializers module
from .serializers import UserSerializer

# Import permission classes to handle access control
from rest_framework.permissions import IsAuthenticated, AllowAny


# View to handle user creation
class CreateUserView(generics.CreateAPIView):
    # Define the queryset to be used by this view, which includes all User instances
    queryset = User.objects.all()
    # Specify the serializer class to be used for data validation and serialization
    serializer_class = UserSerializer
    # Set the permission class to allow any user (authenticated or not) to access this view
    permission_classes = [AllowAny]
