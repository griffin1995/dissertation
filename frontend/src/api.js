// Import axios for making HTTP requests
import axios from "axios";

// Import the ACCESS_TOKEN constant from the constants file
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "/choreo-apis/dissertation/backend/v1";

// Create an axios instance with a base URL from environment variables
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

// Add a request interceptor to include the authorization token in headers
api.interceptors.request.use(
  (config) => {
    // Retrieve the access token from local storage
    const token = localStorage.getItem(ACCESS_TOKEN);
    // If a token exists, set the Authorization header with the Bearer token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors by rejecting the promise with the error
    return Promise.reject(error);
  }
);

// Export the configured axios instance as the default export
export default api;
