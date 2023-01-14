import * as Styles from './styles';

interface Props {
	httpCode: number;
}

function HttpCodeButton({ httpCode }: Props) {
	return (
		<Styles.ButtonHttpCode>
			{httpCode}
		</Styles.ButtonHttpCode>
	);
}

export { HttpCodeButton };
