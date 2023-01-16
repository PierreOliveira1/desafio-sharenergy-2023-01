import { useLoading } from '@stores/isLoading';
import * as Styles from './styles';
import { useQuery } from 'react-query';
import { DataDog } from './dtos/dataDog';
import { queryClient } from '@config/queryClient';
import { toast, Toaster } from 'react-hot-toast';

function randomDog() {
	const { setIsLoading } = useLoading();
	const imagesTypes = ['jpg', 'jpeg', 'png', 'gif'];
	const videosTypes = ['mp4'];
	const dog = useQuery<DataDog>('dog', async () => {
		setIsLoading(true);
		const response = await fetch('https://random.dog/woof.json');

		return await response.json();
	});

	function handleDeactivateLoading() {
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	}

	function onErrorImage() {
		toast.error('Erro ao carregar, tente novamente!', { duration: 2000 });
		handleDeactivateLoading();
	}

	function handleImageVideo() {
		if(dog.isSuccess) {
			const result = dog.data.url.split('.');
			const extension = result[result.length - 1].toLowerCase();

			if(imagesTypes.includes(extension)) {
				return (
					<Styles.Image
						src={dog.data.url}
						onLoad={() => handleDeactivateLoading()}
						onError={onErrorImage}
					/>
				);
			}

			if(videosTypes.includes(extension)) {
				return (
					<Styles.BoxIframe>
						<Styles.Iframe
							src={dog.data.url}
							onLoad={() => handleDeactivateLoading()}
							onError={onErrorImage}
						/>
					</Styles.BoxIframe>
				);
			}
		}
	}

	return (
		<Styles.Container>
			<Toaster />
			{handleImageVideo()}
			<Styles.Refresh
				type="button"
				onClick={() => {
					queryClient.invalidateQueries('dog');
				}}
			>
				Atualizar
			</Styles.Refresh>
		</Styles.Container>
	);
}

export default randomDog;
