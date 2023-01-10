import styled from 'styled-components';

export const Container = styled.label<{
	color?: string;
}>`
	width: fit-content;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	cursor: pointer;
	font-size: 1rem;
	user-select: none;
	color: ${({ color, theme }) => color || theme.color.secondary};

	&:hover > span {
		background-color: gray;
	}

	& input:checked ~ span {
		background-color: ${({ theme }) => theme.color.primary};
	}

	& input:checked ~ span:after {
		display: block;
	}

	& span:after {
		width: 4px;
		height: 10px;
		left: 8px;
		top: 3px;
		border: solid white;
		border-width: 0 3px 3px 0;
		transform: rotate(45deg);
	}
`;

export const InputCheckbox = styled.input`
	display: none;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
`;

export const Checkmark = styled.span`
	top: 0;
	left: 0;
	width: 22px;
	height: 22px;
	background-color: gray;
	margin-right: 5px;
	border-radius: 5px;
	transition: all 200ms;

	&:after {
		content: '';
		position: absolute;
		display: none;
	}
`;
