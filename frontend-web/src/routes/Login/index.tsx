import { lazy } from 'react';
import { Suspense } from 'react';

const LazyLogin = lazy(() => import('@modules/login'));

function Login() {
	return(
		<Suspense fallback={<></>}>
			<LazyLogin />
		</Suspense>
	);
}

export { Login };
