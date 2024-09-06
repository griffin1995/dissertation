import "../styles/Navbar.scss"; // Importing the CSS file for styling the Navbar component
import { NavLink } from "react-router-dom"; // Use NavLink for active link styling

// Navbar component renders a navigation bar with links to different sections of the website
export function Navbar() {
  return (
    <div className="navbar-container">
      {/* Logo section of the navbar */}
      <div className="navbar-logo">Jack Griffin</div>

      {/* Links section of the navbar */}
      <div className="navbar-links">
        <ul>
          {/* Each NavLink is used for navigation and applies the 'active-link' class when the route matches */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crud"
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
            >
              CRUD
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Contact button in the navbar */}
      <div className="navbar-button">
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}
