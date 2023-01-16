import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from '@routes/Login';
import { Header } from '@components/common/Header';
import { Users } from '@routes/Users';
import { HttpCode } from '@routes/HttpCode';
import { RandomDog } from '@routes/RandomDog';
import { Customers } from '@routes/Customers';

const router = createBrowserRouter([
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/',
		element: <Header />,
		children: [
			{
				path: '/',
				element: <Users />
			},
			{
				path: '/http-code',
				element: <HttpCode />
			},
			{
				path: '/random-dog',
				element: <RandomDog />
			},
			{
				path: '/customers',
				element: <Customers />
			}
		]
	}
],
{
	basename: '/'
});

function Routes() {
	return(
		<RouterProvider router={router} />
	);
}

export default Routes;
