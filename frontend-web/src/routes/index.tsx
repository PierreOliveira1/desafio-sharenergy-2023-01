import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from '@routes/Login';
// import { Loading } from '@components/common/Loading';
import { Header } from '@components/common/Header';
import { Users } from '@routes/Users';

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
