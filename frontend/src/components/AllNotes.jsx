import Note from "./Note";

function AllNotes({ notes, deleteNote }) {
  return (
    <div className="note-container">
      <h2>Notes</h2>
      {notes.map((note) => (
        <Note note={note} onDelete={deleteNote} key={note.id} />
      ))}
    </div>
  );
}

export default AllNotes;
