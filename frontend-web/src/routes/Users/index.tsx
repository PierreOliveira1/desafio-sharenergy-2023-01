import { Loading } from '@components/common/Loading';
import { lazy } from 'react';
import { Suspense } from 'react';

const LazyUsers = lazy(() => import('@modules/users'));

function Users() {
	return(
		<Suspense fallback={<Loading />}>
			<LazyUsers />
		</Suspense>
	);
}

export { Users };
