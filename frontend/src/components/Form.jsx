// Import useState hook for managing component state
import { useState } from "react";
// Import custom API instance for making HTTP requests
import api from "../api";
// Import useNavigate hook for programmatic navigation after form submission
import { useNavigate } from "react-router-dom";
// Import constants for storing token keys (access and refresh tokens)
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.scss"; // Importing the CSS file for styling the form

// Form component for handling user login and registration
function Form({ route, method }) {
  // State variables for managing form input values (username and password)
  const [username, setUsername] = useState(""); // State for storing the username input
  const [password, setPassword] = useState(""); // State for storing the password input

  // Hook for navigating programmatically after form submission
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Make API request with provided route and form data (username and password)
      const result = await api.post(route, { username, password });

      if (method === "login") {
        // If the method is "login", store access and refresh tokens in localStorage
        localStorage.setItem(ACCESS_TOKEN, result.data.access);
        localStorage.setItem(REFRESH_TOKEN, result.data.refresh);
        navigate("/"); // Navigate to home page after successful login
      } else {
        // If the method is "register", navigate to the login page after successful registration
        navigate("/login");
      }
    } catch (error) {
      // Display an error message if the API request fails
      alert(error);
    }
  };

  // Determine form title based on the method (either "Login" or "Register")
  const name = method === "login" ? "Login" : "Register";

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {/* Render form title based on the method */}
      <h1>{name}</h1>
      {/* Input field for the username */}
      <input
        className="form-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // Update the username state when input value changes
        placeholder="Username"
      />
      {/* Input field for the password */}
      <input
        className="form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Update the password state when input value changes
        placeholder="Password"
      />
      {/* Submit button that displays either "Login" or "Register" based on the method */}
      <button className="form-button" type="submit">
        {name}
      </button>
      {/* Conditional rendering of a prompt for password recovery or switching between login/register */}
      <p>{method === "login" ? "Forgot password? Register" : "Log in"}</p>
    </form>
  );
}

export default Form; // Exporting the Form component as the default export
