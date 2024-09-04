import { useState, useEffect } from "react";
import api from "../api";
import AllNotes from "./AllNotes";
import CreateNote from "./CreateNote";

function NotesPage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes(); // Fetch notes when the component mounts
  }, []);

  // Function to fetch notes from the backend
  const getNotes = () => {
    api
      .get("/api/notes")
      .then((res) => res.data)
      .then((data) => setNotes(data))
      .catch((err) => alert(err));
  };

  // Function to delete a note by its ID
  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          alert("Note deleted.");
          getNotes(); // Refresh notes after deletion
        } else {
          alert("Failed to delete note.");
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <div>
      {/* Render CreateNote and pass down the function to refresh notes */}
      <CreateNote onNoteCreated={getNotes} />
      {/* Render AllNotes and pass down the notes and delete function */}
      <AllNotes notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default NotesPage;
