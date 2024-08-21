# Import the path function for URL routing
from django.urls import path

# Import the views from the current module
from . import views

# Define the URL patterns for the application
urlpatterns = [
    # URL pattern for listing and creating notes
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    # URL pattern for deleting a note by its primary key (pk)
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
]
