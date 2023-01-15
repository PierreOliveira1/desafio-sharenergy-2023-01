import { forwardRef, InputHTMLAttributes, MouseEvent, Ref, useState } from 'react';
import * as Styles from './styles';
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	width?: string;
	height?: string;
	margin?: string;
	isPassword?: boolean;
	type?: string;
	icon?: JSX.Element;
	handleIconClick?: (event: MouseEvent<HTMLElement>) => void;
}

function InputComponent(props: Props, ref: Ref<HTMLInputElement>) {
	const [viewPassword, setViewPassword] = useState(true);
	const { width, height, margin, isPassword, type, icon, handleIconClick, ...rest } = props;

	function handleViewPassword(event: MouseEvent<HTMLElement>) {
		event.preventDefault();
		setViewPassword(state => !state);
	}

	const typePassword = isPassword ? viewPassword ? 'password' : 'text' : type;

	return <Styles.InputContainer width={width} height={height} margin={margin} >
		<Styles.Input
			ref={ref}
			type={typePassword}
			{...rest}
		/>
		{isPassword && (
			<Styles.Icon type='button' onClick={handleViewPassword}>
				{
					viewPassword ? <EyeClosedIcon /> : <EyeOpenIcon />
				}
			</Styles.Icon>
		)}
		{icon && (
			<Styles.Icon type="button" onClick={handleIconClick}>
				{icon}
			</Styles.Icon>
		)}
	</Styles.InputContainer>;
}

const Input = forwardRef(InputComponent);

export { Input };
