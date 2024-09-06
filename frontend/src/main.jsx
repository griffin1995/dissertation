// Import StrictMode from React to highlight potential problems in an application
import { StrictMode } from 'react';

// Import createRoot from React DOM to create a root DOM node for the React app
import { createRoot } from 'react-dom/client';

// Import the main App component from the local App.jsx file
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// Create a root element at the 'root' DOM node and render the App component inside StrictMode
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
);
