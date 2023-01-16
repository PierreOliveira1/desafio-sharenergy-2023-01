import { useLoading } from '@stores/isLoading';
import { useEffect } from 'react';
import { ListCustomers } from './components/common/ListCustomers';
import * as Styles from './styles';

function Customers() {
	const { setIsLoading } = useLoading();

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return (
		<Styles.Container>
			<ListCustomers />
		</Styles.Container>
	);
}

export default Customers;
