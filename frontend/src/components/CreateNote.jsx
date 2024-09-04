import { useState } from "react";
import api from "../api";
import "../styles/CreateNote.css";
function CreateNote({ onNoteCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { title, content })
      .then((res) => {
        if (res.status === 201) {
          alert("Note created.");
          onNoteCreated(); // Notify parent component to refresh the notes
        } else {
          alert("Failed to create note.");
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <form onSubmit={createNote}>
      <h2>Create a Note</h2>
      <label htmlFor="title">Title</label>
      <br />
      <input
        type="text"
        id="title"
        name="title"
        required
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      ></input>
      <label htmlFor="content">Content</label>
      <br />
      <textarea
        id="content"
        name="content"
        required
        onChange={(e) => setContent(e.target.value)}
        value={content}
      ></textarea>
      <br />
      <input type="submit" value="Submit"></input>
    </form>
  );
}

export default CreateNote;
