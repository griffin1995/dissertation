// Import Navigate component from react-router-dom for redirecting users
import { Navigate } from "react-router-dom";

// Import jwtDecode to decode JWT tokens
import { jwtDecode } from "jwt-decode";

// Import the configured axios instance from the api module
import api from "../api";

// Import constants for token keys from the constants file
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";

// Import useState and useEffect hooks from React for state management and side effects
import { useState, useEffect } from "react";

function ProtectedRoute({ children }) {
  // State to track if the user is authorized
  const [isAuthorized, setIsAuthorized] = useState(null);

  // useEffect to run the auth check when the component mounts
  useEffect(() => {
    auth().catch(() => setIsAuthorized(false));
  }, []);

  // Function to refresh the access token using the refresh token
  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);

    try {
      // Send a POST request to refresh the access token
      const response = await api.post("/api/token/refresh/", {
        refresh: refreshToken,
      });
      if (response.status === 200) {
        // Save the new access token to localStorage
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        // Set the user as authorized
        setIsAuthorized(true);
      } else {
        // Set the user as unauthorized if the response status is not 200
        setIsAuthorized(false);
      }
    } catch (error) {
      // Log any errors and set the user as unauthorized
      console.log(error);
      setIsAuthorized(false);
    }
  };

  // Function to authenticate the user
  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      // If no token is found, set the user as unauthorized
      setIsAuthorized(false);
      return;
    }
    // Decode the JWT token to check its expiration
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;

    // Check if the token has expired
    if (tokenExpiration < now) {
      // If expired, try to refresh the token
      await refreshToken();
    } else {
      // If valid, set the user as authorized
      setIsAuthorized(true);
    }
  };

  // Display a loading message while checking authorization
  if (isAuthorized === null) {
    return <div>Checking permissions..</div>;
  }

  // If authorized, render the children components; otherwise, redirect to the login page
  return isAuthorized ? children : <Navigate to="login" />;
}

// Export the ProtectedRoute component as the default export of this module
export default ProtectedRoute;
