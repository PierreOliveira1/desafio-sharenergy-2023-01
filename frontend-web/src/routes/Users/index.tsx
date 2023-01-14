import { lazy } from 'react';
import { Suspense } from 'react';

const LazyUsers = lazy(() => import('@modules/users'));

function Users() {
	return(
		<Suspense fallback={<></>}>
			<LazyUsers />
		</Suspense>
	);
}

export { Users };
