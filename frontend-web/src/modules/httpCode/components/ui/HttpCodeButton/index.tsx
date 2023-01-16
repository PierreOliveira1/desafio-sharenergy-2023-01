import { useHttpCode } from '@modules/httpCode/store/useHttpCode';
import { useLoading } from '@stores/isLoading';
import * as Styles from './styles';

interface Props {
	httpCode: number;
}

function HttpCodeButton({ httpCode }: Props) {
	const { setIsLoading } = useLoading();
	const httpCodeStore = useHttpCode();

	return (
		<Styles.ButtonHttpCode
			type='button'
			onClick={() => {
				httpCodeStore.setHttpCode(httpCode);
				if(httpCodeStore.httpCode !== httpCode)
					setIsLoading(true);
			}}
		>
			{httpCode}
		</Styles.ButtonHttpCode>
	);
}

export { HttpCodeButton };
