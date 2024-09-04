import "../styles/Notes.css";
// Note component that displays a single note's details and handles deletion
function Note({ note, onDelete }) {
  // Formatting the note's creation date to a readable format (UK format)
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-UK");

  return (
    <div className="note-container">
      {/* Displaying the note's title */}
      <p className="note-title">{note.title}</p>
      {/* Displaying the note's content */}
      <p className="note-content">{note.content}</p>
      {/* Displaying the formatted creation date */}
      <p className="note-date">{formattedDate}</p>
      {/* Button to delete the note, triggering the onDelete function passed as a prop */}
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}

export default Note; // Exporting the Note component as the default export
