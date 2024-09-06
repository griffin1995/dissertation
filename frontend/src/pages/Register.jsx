// Import the Form component from the components directory
import { Form } from "../components";

// The Register component renders a form for user registration
export function Register() {
  return (
    // Render the Form component and pass the registration API route and method as props
    <Form
      route="/api/user/register/" // API endpoint for user registration
      method="register" // Method indicating the form action is for registering a new user
    />
  );
}
