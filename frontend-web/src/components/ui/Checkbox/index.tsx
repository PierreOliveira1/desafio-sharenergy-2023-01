import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import { Checkmark, Container, InputCheckbox } from './style';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
	color?: string;
}

function CheckboxComponent(props: Props, ref: Ref<HTMLInputElement>) {
	const { label, color, ...rest } = props;

	return (
		<Container color={color}>
			<InputCheckbox
				ref={ref}
				type="checkbox"
				{...rest}
			/>
			<Checkmark />
			{label}
		</Container>
	);
}

const Checkbox = forwardRef(CheckboxComponent);

export { Checkbox };
