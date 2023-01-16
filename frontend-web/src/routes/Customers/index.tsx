import { lazy, Suspense } from 'react';

const LazyCustomers = lazy(() => import('@modules/customers'));

function Customers() {
	return(
		<Suspense fallback={<></>}>
			<LazyCustomers />
		</Suspense>
	);
}

export { Customers };
