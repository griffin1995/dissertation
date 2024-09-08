import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { Note } from "./Note"; // Import the Note component

// AllNotes component renders a list of notes and allows for deletion
export function AllNotes({ notes, deleteNote }) {
  return (
    <div className="note-container">
      <h2>Notes</h2>

      {/* Loop through the notes array to render each note */}
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

// PropTypes validation for AllNotes component props
AllNotes.propTypes = {
  // notes should be an array of objects with specific shape
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // ID can be a string or number and is required
      title: PropTypes.string.isRequired, // Title is a required string
      content: PropTypes.string.isRequired, // Content is a required string
      created_at: PropTypes.string.isRequired, // created_at is a required string
    })
  ).isRequired, // 'notes' array is required

  // deleteNote should be a required function
  deleteNote: PropTypes.func.isRequired,
};

export default AllNotes;
