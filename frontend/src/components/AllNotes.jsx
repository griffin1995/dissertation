import Note from "./Note"; // Importing the Note component to render individual notes

function AllNotes({ notes, deleteNote }) {
  return (
    <div className="note-container">
      <h2>Notes</h2>
      {/* Looping through the notes array to render each note */}
      {notes.map((note) => (
        // Rendering a Note component for each note and passing the deleteNote function
        <Note note={note} onDelete={deleteNote} key={note.id} />
      ))}
    </div>
  );
}

export default AllNotes; // Exporting the AllNotes component as the default export
