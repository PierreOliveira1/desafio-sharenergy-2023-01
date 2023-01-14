import styled from 'styled-components';

export const ButtonHttpCode = styled.button`
	width: 5rem;
	height: 2rem;
	background: none;
	border: 2px solid ${({ theme }) => theme.color.primary};
	border-radius: 10px;
	color: ${({ theme }) => theme.color.primary};
	font-weight: 700;
	cursor: pointer;
	position: relative;
	transition: 300ms all ease-in-out;
	user-select: none;

	&::after {
		content: "";
		width: 0;
		height: 100%;
		background-color: ${({ theme }) => theme.color.primary};
		position: absolute;
		left: 0;
		top: 0;
		transition: inherit;
		border-radius: 5px;
		z-index: -1;
	}

	&:hover {
		color: #FFFFFF;
	}

	&:hover::after {
		width: 100%;
	}
`;
