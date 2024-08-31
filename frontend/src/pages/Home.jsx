import { useState, useEffect } from "react"; // Importing React hooks for state management and lifecycle methods
import api from "../api"; // Importing the api module to make HTTP requests to the backend

// Home component for displaying and managing notes
function Home() {
  const [notes, setNotes] = useState([]); // State for storing the list of notes
  const [content, setContent] = useState(""); // State for managing the content of a new note
  const [title, setTitle] = useState(""); // State for managing the title of a new note

  // useEffect hook to fetch notes when the component is mounted
  useEffect(() => {
    getNotes(); // Call getNotes function to load notes from the backend
  }, []);

  // Function to fetch notes from the backend
  const getNotes = () => {
    // Check route: api.js calls "/api/notes" > backend/urls.py > if not found, check backend/api/urls.py > NoteListCreate view
    api
      .get("/api/notes") // Sending GET request to fetch notes
      .then((res) => res.data) // Extracting data from the response
      .then((data) => {
        setNotes(data); // Updating the notes state with the fetched data
        console.log(data); // Logging the fetched notes data to the console
      })
      .catch((err) => alert(err)); // Handling errors by displaying an alert
  };

  // Function to delete a note by its ID
  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`) // Sending DELETE request to remove the note
      .then((res) => {
        if (res.status === 204) {
          // Checking if the note was successfully deleted
          alert("Note deleted."); // Alerting the user about successful deletion
        } else {
          alert("Failed to delete note."); // Alerting the user if deletion failed
        }
      })
      .catch((error) => alert(error)); // Handling errors by displaying an alert
    getNotes(); // Refresh the list of notes after deletion
  };

  return <div>Home</div>; // Returning a basic div containing the Home component
}

export default Home; // Exporting the Home component as the default export
