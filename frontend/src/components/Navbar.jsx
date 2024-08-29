import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      {" "}
      <div className="navbar-logo">Jack Griffin</div>
      <div className="navbar-links">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Projects</li>
          <li>About</li>
        </ul>
      </div>
      <div className="navbar-button">Contact</div>
    </div>
  );
}

export default Navbar;
