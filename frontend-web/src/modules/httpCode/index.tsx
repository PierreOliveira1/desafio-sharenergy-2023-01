import { useLoading } from '@stores/isLoading';
import { useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { ListSessions } from './components/common/ListSessions';
import { useHttpCode } from './store/useHttpCode';
import * as Styles from './styles';

function HttpCode() {
	const { isLoading, setIsLoading } = useLoading();
	const { httpCode, setHttpCode } = useHttpCode();

	useEffect(() => {
		if(isLoading) setIsLoading(false);
	}, []);

	function handleLoading() {
		setTimeout(() => {
			setIsLoading(false);
		}, 700);
	}

	function onErrorImage() {
		toast.error('Erro ao carregar imagem, tente novamente!', { duration: 2000 });
		handleLoading();
		setHttpCode(0);
	}

	return (
		<Styles.Container>
			<Toaster />
			<Styles.Image
				src={`https://http.cat/${httpCode}`}
				onLoad={handleLoading}
				onError={onErrorImage}
			/>
			<ListSessions />
		</Styles.Container>
	);
}

export default HttpCode;
