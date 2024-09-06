// Import the Note component
import { Note } from "./Note";

// AllNotes component renders a list of notes and allows for deletion
export function AllNotes({ notes, deleteNote }) {
  return (
    <div className="note-container">
      <h2>Notes</h2>

      {/* Looping through the notes array to render each note */}
      {notes.map((note) => (
        // Rendering a Note component for each note and passing the deleteNote function
        <Note
          note={note}
          onDelete={deleteNote}
          key={note.id} // Key is required for proper list rendering in React
        />
      ))}
    </div>
  );
}
