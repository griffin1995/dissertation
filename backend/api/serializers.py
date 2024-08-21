# Import the User model from Django's built-in authentication system
from django.contrib.auth.models import User

# Import the serializers module from Django REST framework to handle serialization and deserialization
from rest_framework import serializers


# Serializer class for the User model, used to convert model instances to and from JSON
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        # Specify the model to be serialized
        model = User
        # Define the fields that should be included in the serialized output
        fields = ["id", "username", "password"]
        # Additional settings, such as making the password field write-only
        extra_kwargs = {"password": {"write_only": True}}

    # Method to create a new User instance
    def create(self, validated_data):
        # Use the create_user method to handle password hashing and user creation
        user = User.objects.create_user(**validated_data)
        return user
