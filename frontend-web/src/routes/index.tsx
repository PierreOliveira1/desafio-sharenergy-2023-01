import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../modules/auth/pages/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	}
]);

function Routes() {
	return(
		<RouterProvider router={router} />
	);
}

export default Routes;
