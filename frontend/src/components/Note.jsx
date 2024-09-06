import '../styles/Notes.scss'; // Importing the CSS file for styling the notes

// Note component that displays a single note's details and handles its deletion
export function Note({ note, onDelete }) {
	const date = new Date(note.created_at);

	// Extracting the date and time components
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear();

	// Formatting the date and time as 'HH:MM DD/MM/YYYY'
	const formattedDate = `${hours}:${minutes} ${day}/${month}/${year}`;

	return (
		<div className='note-container'>
			{/* Displaying the note's title */}
			<p className='note-title'>{note.title}</p>
			{/* Displaying the note's content */}
			<p className='note-content'>{note.content}</p>
			{/* Displaying the formatted creation date */}
			<p className='note-date'>{formattedDate}</p>
			{/* Button to delete the note, triggering the onDelete function passed as a prop */}
			<button
				className='delete-button'
				onClick={() => onDelete(note.id)}
			>
				Delete
			</button>
		</div>
	);
}
