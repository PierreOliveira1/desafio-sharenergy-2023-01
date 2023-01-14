import { lazy } from 'react';
import { Suspense } from 'react';

const LazyHttpCode = lazy(() => import('@modules/httpCode'));

function HttpCode() {
	return(
		<Suspense fallback={<></>}>
			<LazyHttpCode />
		</Suspense>
	);
}

export { HttpCode };
