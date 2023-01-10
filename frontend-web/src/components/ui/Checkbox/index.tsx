import { ChangeEvent, InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Checkmark, Container, InputCheckbox } from './style';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
  label?: string;
  value?: string | number;
	color?: string;
  register?: UseFormRegisterReturn;
}

function Checkbox(props: Props) {
	const { id, name, onChange, isChecked, label, value, register, color } = props;

	return (
		<Container color={color}>
			<InputCheckbox
				type="checkbox"
				id={id}
				name={name}
				onChange={onChange}
				checked={isChecked}
				value={value}
				{...register}
			/>
			<Checkmark />
			{label}
		</Container>
	);
}

export { Checkbox };
