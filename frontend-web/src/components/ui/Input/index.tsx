import { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import * as Styles from './styles';

interface Props {
	width?: string;
	height?: string;
	placeholder?: string;
	type: HTMLInputTypeAttribute;
	onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: Props) {
	const { width, height, onChange, placeholder, type } = props;

	return <Styles.Input width={width} height={height} type={type} placeholder={placeholder} onChange={onChange} />;
}

export { Input };
