import "../styles/Navbar.scss"; // Importing the CSS file for styling the Navbar component

function Navbar() {
  return (
    <div className="navbar-container">
      {/* Logo section of the navbar */}
      <div className="navbar-logo">Jack Griffin</div>

      {/* Links section of the navbar */}
      <div className="navbar-links">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Projects</li>
          <li>About</li>
        </ul>
      </div>

      {/* Contact button in the navbar */}
      <div className="navbar-button">Contact</div>
    </div>
  );
}

export default Navbar; // Exporting the Navbar component as the default export
