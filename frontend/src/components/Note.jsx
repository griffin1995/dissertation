import PropTypes from "prop-types"; // Import PropTypes for props validation
import "../styles/Notes.scss"; // Importing the CSS file for styling the notes

// Note component that displays a single note's details and handles its deletion
export function Note({ note, onDelete }) {
  // Convert the created_at timestamp into a JavaScript Date object
  const date = new Date(note.created_at);

  // Extracting the date and time components
  const hours = date.getHours().toString().padStart(2, "0"); // Format hours with leading zeroes
  const minutes = date.getMinutes().toString().padStart(2, "0"); // Format minutes with leading zeroes
  const day = date.getDate().toString().padStart(2, "0"); // Format day with leading zeroes
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed, so add 1
  const year = date.getFullYear(); // Get the full year

  // Formatting the date and time as 'HH:MM DD/MM/YYYY'
  const formattedDate = `${hours}:${minutes} ${day}/${month}/${year}`;

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

// PropTypes validation for the Note component
Note.propTypes = {
  // Define the shape of the 'note' prop
  note: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // note ID can be a string or number
    title: PropTypes.string.isRequired, // Title of the note is required
    content: PropTypes.string.isRequired, // Content of the note is required
    created_at: PropTypes.string.isRequired, // created_at is required and should be a string (ISO date)
  }).isRequired, // 'note' object is required

  // onDelete function is required for deleting the note
  onDelete: PropTypes.func.isRequired,
};

export default Note;
