// Import useState and useEffect hooks from React for state management and side effects
import { useState, useEffect } from "react";

// Import custom API instance for making HTTP requests to the backend
import api from "../api";

// Import AllNotes and CreateNote components
import AllNotes from "./AllNotes";
import CreateNote from "./CreateNote";

function NotesPage() {
  // State to store the list of notes fetched from the backend
  const [notes, setNotes] = useState([]);

  // useEffect hook to fetch notes when the component is mounted
  useEffect(() => {
    getNotes(); // Fetch notes from the API
  }, []);

  // Function to fetch notes from the backend and update the state
  const getNotes = () => {
    api
      .get("/api/notes") // Send a GET request to the API endpoint to retrieve notes
      .then((res) => res.data) // Extract the data from the response
      .then((data) => setNotes(data)) // Update the notes state with the fetched data
      .catch((err) => alert(err)); // Display an alert if there's an error
  };

  // Function to delete a note by its ID and refresh the notes list after deletion
  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`) // Send a DELETE request to remove the note by ID
      .then((res) => {
        if (res.status === 204) {
          alert("Note deleted."); // Show a success message if deletion is successful
          getNotes(); // Refresh the notes list after deletion
        } else {
          alert("Failed to delete note."); // Show an error message if deletion fails
        }
      })
      .catch((error) => alert(error)); // Display an alert if there's an error
  };

  return (
    <div>
      {/* Render the CreateNote component and pass down the function to refresh the notes after creation */}
      <CreateNote onNoteCreated={getNotes} />
      {/* Render the AllNotes component, passing the list of notes and the delete function */}
      <AllNotes notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default NotesPage; // Export the NotesPage component as the default export
