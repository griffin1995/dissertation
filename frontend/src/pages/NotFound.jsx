// Functional component for rendering a "Not Found" page when a user navigates to a nonexistent route
export function NotFound() {
  return (
    <div id="error">
      {/* Display a title indicating the page was not found */}
      <h1 className="notFoundTitle">Oops! That page can’t be found.</h1>

      {/* Display a descriptive message suggesting possible actions */}
      <p className="notFoundDesc">
        It looks like nothing was found at this location. Maybe try one of the
        links in the menu or press back to go to the previous page.
      </p>
    </div>
  );
}
