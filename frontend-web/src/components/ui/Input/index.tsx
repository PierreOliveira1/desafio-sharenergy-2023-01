import * as Styles from './styles';

interface Props {
	width?: string;
	height?: string;
}

function Input(props: Props) {
	const { width, height } = props;

	return <Styles.Input width={width} height={height} />;
}

export { Input };
