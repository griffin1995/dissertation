import { Navigate, Route, Routes } from 'react-router-dom';

import {
	About,
	Crud,
	Home,
	Login,
	NotFound,
	Projects,
	Register,
	Services,
} from '../pages';
import { ProtectedRoute } from '../components';

export const AppRouter = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<ProtectedRoute>
						<Home />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/login'
				element={<Login />}
			/>
			<Route
				path='/logout'
				element={<Logout />}
			/>
			<Route
				path='/register'
				element={<RegisterAndLogout />}
			/>
			<Route
				path='/services'
				element={<Services />}
			/>
			<Route
				path='/projects'
				element={<Projects />}
			/>
			<Route
				path='/about'
				element={<About />}
			/>
			<Route
				path='/crud'
				element={<Crud />}
			/>
			<Route
				path='*'
				element={<NotFound />}
			/>
		</Routes>
	);
};

function RegisterAndLogout() {
	localStorage.clear();
	return <Register />;
}

function Logout() {
	localStorage.clear();
	return <Navigate to='/login' />;
}
