import styled from 'styled-components';

export const Submit = styled.button`
	width: 30%;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.color.tertiary};
	font-size: 1.2rem;
	font-weight: 700;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.color.primary};
	cursor: pointer;
	transition: 300ms all;
`;

export const Button = styled.button``;
