import { Note } from './Note';

export function AllNotes({ notes, deleteNote }) {
	return (
		<div className='note-container'>
			<h2>Notes</h2>
			{/* Looping through the notes array to render each note */}
			{notes.map((note) => (
				// Rendering a Note component for each note and passing the deleteNote function
				<Note
					note={note}
					onDelete={deleteNote}
					key={note.id}
				/>
			))}
		</div>
	);
}
