// Import the Form component from the components directory
import { Form } from "../components";

// The Login component renders a form for user authentication
export function Login() {
  return (
    // Render the Form component and pass the login API route and method as props
    <Form
      route="/api/token/" // API endpoint for user login/authentication
      method="login" // Method indicating the form action is for logging in a user
    />
  );
}
