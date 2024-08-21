from django.db import models

# Import the User model from Django's built-in authentication system
from django.contrib.auth.models import User


# Define a Note model to represent a note in the database
class Note(models.Model):
    # Title of the note, limited to 100 characters
    title = models.CharField(max_length=100)

    # Content of the note, allowing for large amounts of text
    content = models.TextField()

    # Timestamp indicating when the note was created, automatically set on creation
    created_at = models.DateTimeField(auto_now_add=True)

    # ForeignKey relationship linking the note to its author (a User)
    # If the user is deleted, all related notes will also be deleted (CASCADE)
    # related_name allows reverse lookup from the User model to retrieve all associated notes
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    # String representation of the model, returning the title of the note
    def __str__(self):
        return self.title
