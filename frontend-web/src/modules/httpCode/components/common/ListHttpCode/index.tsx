import { HttpCodeButton } from '../../ui/HttpCodeButton';
import * as Styles from './styles';

interface Props {
	httpCodes: number[];
}

function ListHttpCode({ httpCodes }: Props) {
	return (
		<Styles.Content>
			{httpCodes.map((httpCode, index) => (
				<Styles.BoxHttpCode key={index}>
					<HttpCodeButton httpCode={httpCode} />
				</Styles.BoxHttpCode>
			))}
		</Styles.Content>
	);
}

export { ListHttpCode };
