import { ButtonHTMLAttributes } from 'react';
import * as Styles from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isSubmit?: boolean;
	value?: string;
}

function Button(props: Props) {
	const { isSubmit, value, ...rest } = props;

	if(isSubmit)
		return (
			<Styles.Submit {...rest} type="submit">{value}</Styles.Submit>
		);

	return <Button {...rest}>{value}</Button>;
}

export { Button };
