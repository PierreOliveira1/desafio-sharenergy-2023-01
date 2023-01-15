import { useLoading } from '@stores/isLoading';
import * as Styles from './styles';
import { useQuery } from 'react-query';
import { DataDog } from './dtos/dataDog';
import { queryClient } from '@config/queryClient';

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

	function handleImageVideo() {
		if(dog.isSuccess) {
			const result = dog.data.url.split('.');
			const extension = result[result.length - 1].toLowerCase();

			if(imagesTypes.includes(extension)) {
				return (
					<Styles.Image
						src={dog.data.url}
						onLoad={() => handleDeactivateLoading()}
					/>
				);
			}

			if(videosTypes.includes(extension)) {
				return (
					<Styles.BoxIframe>
						<Styles.Iframe
							src={dog.data.url}
							onLoad={() => handleDeactivateLoading()}
						/>
					</Styles.BoxIframe>
				);
			}
		}
	}

	return (
		<Styles.Container>
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
