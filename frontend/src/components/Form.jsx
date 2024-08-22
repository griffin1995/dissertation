// Import useState hook for managing component state
import { useState } from "react";
// Import custom API instance for making HTTP requests
import api from "../api";
// Import useNavigate hook for programmatic navigation
import { useNavigate } from "react-router-dom";
// Import constants for storing token keys
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function Form({ route, method }) {
  // State variables for managing form input values and loading state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Hook for navigating programmatically
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    setLoading(true); // Set loading state to true while processing
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Make API request with provided route and form data
      const result = await api.post(route, { username, password });

      if (method === "login") {
        // If the method is "login", store access and refresh tokens in localStorage
        localStorage.setItem(ACCESS_TOKEN, result.data.access);
        localStorage.setItem(REFRESH_TOKEN, result.data.refresh);
        navigate("/"); // Navigate to home page after successful login
      } else {
        // If the method is not "login", navigate to the login page after registration
        navigate("/login");
      }
    } catch (error) {
      // Display error message in case of failure
      alert(error);
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  // Determine form title based on the method ("login" or "register")
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
      {/* Submit button that displays either "Login" or "Register" */}
      <button className="form-button" type="submit">
        {name}
      </button>
    </form>
  );
}

export default Form;
