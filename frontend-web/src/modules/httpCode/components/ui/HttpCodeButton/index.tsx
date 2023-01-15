import { useHttpCode } from '@modules/httpCode/store/useHttpCode';
import * as Styles from './styles';

interface Props {
	httpCode: number;
}

function HttpCodeButton({ httpCode }: Props) {
	const { setHttpCode } = useHttpCode();

	return (
		<Styles.ButtonHttpCode type='button' onClick={() => setHttpCode(httpCode)}>
			{httpCode}
		</Styles.ButtonHttpCode>
	);
}

export { HttpCodeButton };
