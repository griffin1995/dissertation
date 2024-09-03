import { useState, useEffect } from "react"; // Importing React hooks for state management and lifecycle methods
import api from "../api"; // Importing the api module to make HTTP requests to the backend
import Note from "../components/Note"; // Importing the Note component to display individual notes
import "../styles/Home.css"
// Home component for displaying and managing notes
function Home() {
  const [notes, setNotes] = useState([]); // State for storing the list of notes
  const [content, setContent] = useState(""); // State for managing the content of a new note
  const [title, setTitle] = useState(""); // State for managing the title of a new note

  // useEffect hook to fetch notes when the component is mounted
  useEffect(() => {
    getNotes(); // Call getNotes function to load notes from the backend
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Function to fetch notes from the backend
  const getNotes = () => {
    // Sending GET request to fetch notes from the "/api/notes" endpoint
    api
      .get("/api/notes")
      .then((res) => res.data) // Extracting the data from the response object
      .then((data) => {
        setNotes(data); // Updating the notes state with the fetched data
        console.log(data); // Logging the fetched notes data to the console
      })
      .catch((err) => alert(err)); // Handling any errors by displaying an alert
  };

  // Function to delete a note by its ID
  const deleteNote = (id) => {
    // Sending DELETE request to remove the note from the backend
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          // Checking if the note was successfully deleted (HTTP 204 No Content)
          alert("Note deleted."); // Alerting the user about successful deletion
        } else {
          alert("Failed to delete note."); // Alerting the user if deletion failed
        }
        getNotes(); // Refreshing the list of notes after deletion
      })
      .catch((error) => alert(error)); // Handling any errors by displaying an alert
  };

  // Function to create a new note
  const createNote = (e) => {
    e.preventDefault(); // Preventing the default form submission behavior
    // Sending POST request to create a new note with the provided content and title
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) {
          // Checking if the note was successfully created (HTTP 201 Created)
          alert("Note created."); // Alerting the user about successful creation
        } else {
          alert("Failed to make note."); // Alerting the user if creation failed
        }
        getNotes(); // Refreshing the list of notes after creation
      })
      .catch((err) => alert(err)); // Handling any errors by displaying an alert
  };

  return (
    <div>
      {/* Section for displaying the list of notes */}
      <div>
        <h2>Notes</h2>
        {notes.map((note) => (
          <Note note={note} onDelete={deleteNote} key={note.id} /> // Rendering each note using the Note component
        ))}
      </div>
      {/* Section for creating a new note */}
      <h2>Create a Note</h2>
      <form onSubmit={createNote}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)} // Updating the title state when the input value changes
          value={title} // Binding the input value to the title state
        ></input>
        <label htmlFor="content">Content</label>
        <br />
        <textarea
          id="content"
          name="content"
          required
          onChange={(e) => setContent(e.target.value)} // Updating the content state when the textarea value changes
          value={content} // Binding the textarea value to the content state
        ></textarea>
        <br />
        <input type="submit" value="Submit"></input>{" "}
        {/* Submit button for the form */}
      </form>
    </div>
  ); // Returning a basic div containing the Home component's content
}

export default Home; // Exporting the Home component as the default export
