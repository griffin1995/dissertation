import { useState } from "react"; // Importing useState hook to manage component state
import api from "../api"; // Importing the custom API instance for making HTTP requests
import "../styles/CreateNote.scss"; // Importing the CSS file for styling the CreateNote component

function CreateNote({ onNoteCreated }) {
  // State variables for managing the input values of title and content
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Function to handle note creation and form submission
  const createNote = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    api
      .post("/api/notes/", { title, content }) // Send POST request to create a new note with title and content
      .then((res) => {
        if (res.status === 201) {
          // If the note creation is successful (HTTP 201)
          alert("Note created.");
          onNoteCreated(); // Notify parent component to refresh the notes list
        } else {
          alert("Failed to create note."); // Show error if note creation fails
        }
      })
      .catch((err) => alert(err)); // Handle any errors from the API call
  };

  return (
    <form onSubmit={createNote}>
      <h2>Create a Note</h2>
      {/* Input field for the note title */}
      <label htmlFor="title">Title</label>
      <br />
      <input
        type="text"
        id="title"
        name="title"
        required
        onChange={(e) => setTitle(e.target.value)} // Update title state on change
        value={title}
      ></input>
      {/* Input field for the note content */}
      <label htmlFor="content">Content</label>
      <br />
      <textarea
        id="content"
        name="content"
        required
        onChange={(e) => setContent(e.target.value)} // Update content state on change
        value={content}
      ></textarea>
      <br />
      {/* Submit button to trigger the createNote function */}
      <input type="submit" value="Submit"></input>
    </form>
  );
}

export default CreateNote; // Exporting the CreateNote component as the default export
