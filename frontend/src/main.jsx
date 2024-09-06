// Import StrictMode from React to highlight potential problems in an application during development
import { StrictMode } from 'react';

// Import createRoot from React DOM to create and manage a root DOM node for the React app
import { createRoot } from 'react-dom/client';

// Import the main App component from the local App.jsx file
import App from './App.jsx';

// Import BrowserRouter to enable routing functionality in the React app
import { BrowserRouter } from 'react-router-dom';

// Create a root element at the 'root' DOM node and render the App component wrapped in StrictMode and BrowserRouter
// StrictMode helps identify issues in the application by adding additional checks during development
createRoot(document.getElementById('root')).render(
	<StrictMode>
		{/* BrowserRouter enables navigation and URL routing in the application */}
		<BrowserRouter>
			{/* App component is the main entry point for the application */}
			<App />
		</BrowserRouter>
	</StrictMode>
);
