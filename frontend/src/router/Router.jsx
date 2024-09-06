// Import necessary components and utilities for routing from react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";

// Import the page components used in the routing system
import {
  About,
  Crud,
  Home,
  Login,
  NotFound,
  Projects,
  Register,
  Services,
} from "../pages";

// Import the ProtectedRoute component to protect certain routes
import { ProtectedRoute } from "../components";

// AppRouter component defines all the routes for the application
export const AppRouter = () => {
  return (
    <Routes>
      {/* Route for the home page, wrapped in ProtectedRoute to restrict access */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      {/* Public route for the login page */}
      <Route path="/login" element={<Login />} />

      {/* Route for logout functionality, clears localStorage and redirects to login */}
      <Route path="/logout" element={<Logout />} />

      {/* Route for the register page, also clears localStorage */}
      <Route path="/register" element={<RegisterAndLogout />} />

      {/* Public route for the services page */}
      <Route path="/services" element={<Services />} />

      {/* Public route for the projects page */}
      <Route path="/projects" element={<Projects />} />

      {/* Public route for the about page */}
      <Route path="/about" element={<About />} />

      {/* Public route for the CRUD page */}
      <Route path="/crud" element={<Crud />} />

      {/* Catch-all route for undefined paths, renders NotFound page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// Function to handle logout functionality
// Clears localStorage and redirects to the login page
function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

// Function that handles both registering and logging out
// Clears localStorage before rendering the Register component
function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}
