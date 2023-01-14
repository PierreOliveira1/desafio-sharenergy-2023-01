import { useLoading } from '@stores/isLoading';
import { useEffect } from 'react';
import { ListSessions } from './components/common/ListSessions';
import * as Styles from './styles';

function HttpCode() {
	const { isLoading, setIsLoading } = useLoading();

	useEffect(() => {
		if(isLoading) setIsLoading(false);
	}, []);

	return (
		<Styles.Container>
			<Styles.Image />
			<ListSessions />
		</Styles.Container>
	);
}

export default HttpCode;
