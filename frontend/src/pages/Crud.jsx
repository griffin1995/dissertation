// Import the NotesPage component from the components directory
import { NotesPage } from "../components";

// The Crud component renders the NotesPage, which handles CRUD operations
export function Crud() {
  return (
    <div className="crud-page">
      {/* Render the NotesPage component, which typically handles create, read, update, and delete functionality */}
      <NotesPage />
    </div>
  );
}
