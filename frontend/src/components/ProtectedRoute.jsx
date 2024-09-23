// Import Navigate component from react-router-dom for redirecting users to different routes
import { Navigate } from "react-router-dom";

// Import jwtDecode to decode JWT tokens and extract expiration info
import { jwtDecode } from "jwt-decode";

// Import the configured axios instance from the api module for making HTTP requests
import api from "../api";

// Import constants for token keys (ACCESS_TOKEN and REFRESH_TOKEN) from the constants file
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";

// Import useState and useEffect hooks from React for managing component state and side effects
import { useState, useEffect } from "react";

// ProtectedRoute component restricts access to certain routes based on user authentication
export function ProtectedRoute({ children }) {
  // State to track if the user is authorised; initialised to null to show loading
  const [isAuthorised, setIsAuthorised] = useState(null);

  // useEffect hook runs the authentication check when the component mounts
  useEffect(() => {
    auth().catch(() => setIsAuthorised(false)); // If auth fails, set unauthorised
  }, []);

  // Function to refresh the access token using the refresh token stored in localStorage
  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);

    try {
      // Send a POST request to refresh the access token
      const response = await api.post("/api/token/refresh/", {
        refresh: refreshToken,
      });

      // If the request is successful, save the new access token to localStorage
      if (response.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        setIsAuthorised(true); // Mark user as authorised
      } else {
        // Mark user as unauthorised if the response status is not 200
        setIsAuthorised(false);
      }
    } catch (error) {
      // Log errors to the console and mark user as unauthorised
      console.log(error);
      setIsAuthorised(false);
    }
  };

  // Function to authenticate the user based on the stored access token
  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN); // Retrieve access token from localStorage
    if (!token) {
      // If no token exists, set unauthorised state and exit
      setIsAuthorised(false);
      return;
    }

    // Decode the JWT token to get expiration info
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;

    // Check if the token has expired
    if (tokenExpiration < now) {
      // If the token is expired, attempt to refresh it
      await refreshToken();
    } else {
      // If the token is valid, mark the user as authorised
      setIsAuthorised(true);
    }
  };

  // While authorisation is being checked, show a loading message
  if (isAuthorised === null) {
    return <div>Checking permissions..</div>;
  }

  // If authorised, render the child components; otherwise, redirect to the login page
  return isAuthorised ? children : <Navigate to="login" />;
}
