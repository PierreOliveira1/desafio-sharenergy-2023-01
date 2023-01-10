import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from '@routes/Login';

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
