import { lazy, Suspense } from 'react';

const LazyRandomDog = lazy(() => import('@modules/randomDog'));

function RandomDog() {
	return(
		<Suspense fallback={<></>}>
			<LazyRandomDog />
		</Suspense>
	);
}

export { RandomDog };
