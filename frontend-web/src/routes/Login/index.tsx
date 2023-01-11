import { Loading } from '@components/common/Loading';
import { lazy } from 'react';
import { Suspense } from 'react';

const LazyLogin = lazy(() => import('@modules/login'));

function Login() {
	return(
		<Suspense fallback={<Loading />}>
			<LazyLogin />
		</Suspense>
	);
}

export { Login };
