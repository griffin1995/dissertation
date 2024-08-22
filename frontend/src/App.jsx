// Import React to enable JSX syntax and use React features
import react from "react";
// Import necessary components from react-router-dom for routing
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Import page components
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// Import a protected route component to guard private routes
import ProtectedRoute from "./components/ProtectedRoute";

// Main App component defining the routes for the application
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Protected route for the home page, only accessible if authenticated */}
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

          {/* Public route for the logout page, which clears local storage and redirects to login */}
          <Route path="/logout" element={<Logout />} />

          {/* Public route for the register page, which also clears local storage */}
          <Route path="/register" element={<RegisterAndLogout />} />

          {/* Catch-all route for handling 404 - Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// Function component for handling registration; clears local storage and renders the Register component
function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

// Function component for handling logout; clears local storage and redirects to the login page
function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

// Export the App component as the default export of this module
export default App;
