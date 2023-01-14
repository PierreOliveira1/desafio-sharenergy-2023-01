import * as Styles from './styles';
import { useLoading } from '@stores/isLoading';
import { Variants } from 'framer-motion';

function Loading() {
	const { isLoading } = useLoading();

	const variantsAnimateLoadingView: Variants = {
		open: {
			display: 'flex',
		},
		closed: {
			display: 'none',
		}
	};

	const animate = !isLoading ? 'closed' : 'open';

	return (
		<Styles.Container variants={variantsAnimateLoadingView} animate={animate}>
			<Styles.OnLoading>
				<div></div>
				<div></div>
				<div></div>
			</Styles.OnLoading>
		</Styles.Container>
	);
}


export { Loading };
