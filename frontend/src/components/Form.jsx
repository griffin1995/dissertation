import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { useState } from "react";
import api from "../api"; // Import API instance for making requests
import { useNavigate } from "react-router-dom"; // Hook for navigation after form submission
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"; // Import constants for localStorage keys
import "../styles/Form.scss"; // Importing CSS file for styling

// Form component for handling user login and registration
export function Form({ route, method }) {
  const [username, setUsername] = useState(""); // State for storing the username input
  const [password, setPassword] = useState(""); // State for storing the password input
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // API call to the provided route with username and password
      const result = await api.post(route, { username, password });

      if (method === "login") {
        // On successful login, store tokens in localStorage
        localStorage.setItem(ACCESS_TOKEN, result.data.access);
        localStorage.setItem(REFRESH_TOKEN, result.data.refresh);
        navigate("/"); // Navigate to home page after login
      } else {
        // On successful registration, navigate to login page
        navigate("/login");
      }
    } catch (error) {
      // Handle any errors during form submission
      alert(error);
    }
  };

  // Determine the form title based on the method (login or register)
  const name = method === "login" ? "Login" : "Register";

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>{name}</h1>

      {/* Input field for the username */}
      <input
        className="form-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />

      {/* Input field for the password */}
      <input
        className="form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      {/* Submit button that shows "Login" or "Register" based on the method */}
      <button className="form-button" type="submit">
        {name}
      </button>

      {/* Conditional rendering for a link depending on the form method */}
      <p>{method === "login" ? "Forgot password? Register" : "Log in"}</p>
    </form>
  );
}

// PropTypes validation for Form component props
Form.propTypes = {
  route: PropTypes.string.isRequired, // route must be a string and is required
  method: PropTypes.oneOf(["login", "register"]).isRequired, // method can be either "login" or "register" and is required
};

export default Form;
