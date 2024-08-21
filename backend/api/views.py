# Import the render function to render HTML templates (not used in this example)
from django.shortcuts import render

# Import the User model from Django's built-in authentication system
from django.contrib.auth.models import User

# Import generics from Django REST framework for creating generic class-based views
from rest_framework import generics

# Import the UserSerializer and NoteSerializer defined in the serializers module
from .serializers import UserSerializer, NoteSerializer

# Import the Note model defined in the models module
from .models import Note

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


# View to handle listing and creating notes
class NoteListCreate(generics.ListCreateAPIView):
    # Specify the serializer class to be used for data validation and serialization
    serializer_class = NoteSerializer
    # Set the permission class to require authentication for accessing this view
    permission_classes = [IsAuthenticated]

    # Override the get_queryset method to filter notes by the authenticated user
    def get_queryset(self):
        # Retrieve the authenticated user
        user = self.request.user
        # Return the queryset of notes that belong to the authenticated user
        return Note.objects.filter(author=user)

    # Override the perform_create method to automatically set the author of the note
    def perform_create(self, serializer):
        if serializer.is_valid():
            # Save the note with the authenticated user as the author
            serializer.save(author=self.request.user)
        else:
            # Print validation errors (if any) to the console
            print(serializer.errors)

# View to handle deleting notes
class NoteDelete(generics.DestroyAPIView):
    # Specify the serializer class to be used for data validation and serialization
    serializer_class = NoteSerializer
    # Set the permission class to require authentication for accessing this view
    permission_classes = [IsAuthenticated]

    # Override the get_queryset method to filter notes by the authenticated user
    def get_queryset(self):
        # Retrieve the authenticated user
        user = self.request.user
        # Return the queryset of notes that belong to the authenticated user
        return Note.objects.filter(author=user)
