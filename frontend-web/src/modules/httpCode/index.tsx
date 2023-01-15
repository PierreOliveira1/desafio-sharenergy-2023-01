import { useLoading } from '@stores/isLoading';
import { useEffect } from 'react';
import { ListSessions } from './components/common/ListSessions';
import { useHttpCode } from './store/useHttpCode';
import * as Styles from './styles';

function HttpCode() {
	const { isLoading, setIsLoading } = useLoading();
	const { httpCode } = useHttpCode();

	useEffect(() => {
		if(isLoading) setIsLoading(false);
	}, []);

	return (
		<Styles.Container>
			<Styles.Image src={`https://http.cat/${httpCode}`} />
			<ListSessions />
		</Styles.Container>
	);
}

export default HttpCode;
