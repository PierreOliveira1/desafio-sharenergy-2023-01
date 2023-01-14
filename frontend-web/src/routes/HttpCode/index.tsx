import { Loading } from '@components/common/Loading';
import { lazy } from 'react';
import { Suspense } from 'react';

const LazyHttpCode = lazy(() => import('@modules/httpCode'));

function HttpCode() {
	return(
		<Suspense fallback={<Loading />}>
			<LazyHttpCode />
		</Suspense>
	);
}

export { HttpCode };
