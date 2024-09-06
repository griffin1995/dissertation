// Import Navigate component from react-router-dom for redirecting users to different routes
import { Navigate } from 'react-router-dom';

// Import jwtDecode to decode JWT tokens and extract expiration info
import { jwtDecode } from 'jwt-decode';

// Import the configured axios instance from the api module for making HTTP requests
import api from '../api';

// Import constants for token keys (ACCESS_TOKEN and REFRESH_TOKEN) from the constants file
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../constants';

// Import useState and useEffect hooks from React for managing component state and side effects
import { useState, useEffect } from 'react';

export function ProtectedRoute({ children }) {
	// State to track if the user is authorized; initialized to null to show loading
	const [isAuthorized, setIsAuthorized] = useState(null);

	// useEffect hook runs the authentication check when the component mounts
	useEffect(() => {
		auth().catch(() => setIsAuthorized(false)); // If auth fails, set unauthorized
	}, []);

	// Function to refresh the access token using the refresh token stored in localStorage
	const refreshToken = async () => {
		const refreshToken = localStorage.getItem(REFRESH_TOKEN);

		try {
			// Send a POST request to refresh the access token
			const response = await api.post('/api/token/refresh/', {
				refresh: refreshToken,
			});
			if (response.status === 200) {
				// If the request is successful, save the new access token to localStorage
				localStorage.setItem(ACCESS_TOKEN, response.data.access);
				setIsAuthorized(true); // Mark user as authorized
			} else {
				// Mark user as unauthorized if the response status is not 200
				setIsAuthorized(false);
			}
		} catch (error) {
			// Log errors to the console and mark user as unauthorized
			console.log(error);
			setIsAuthorized(false);
		}
	};

	// Function to authenticate the user based on the stored access token
	const auth = async () => {
		const token = localStorage.getItem(ACCESS_TOKEN); // Retrieve access token from localStorage
		if (!token) {
			// If no token exists, set unauthorized state and exit
			setIsAuthorized(false);
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
			// If the token is valid, mark the user as authorized
			setIsAuthorized(true);
		}
	};

	// While authorization is being checked, show a loading message
	if (isAuthorized === null) {
		return <div>Checking permissions..</div>;
	}

	// If authorized, render the child components; otherwise, redirect to the login page
	return isAuthorized ? children : <Navigate to='login' />;
}
