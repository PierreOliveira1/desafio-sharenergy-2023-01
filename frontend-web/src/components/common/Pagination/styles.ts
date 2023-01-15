import styled from 'styled-components';

export const Content = styled.div`
	width: 200px;
	height: 40px;
	display: flex;
	justify-content: space-around;
	border-radius: 100px;
	position: absolute;
	bottom: 1%;
	right: 1%;
	z-index: 97;
	background-color: ${({ theme }) => theme.color.primary};
`;

export const Button = styled.button<{
	focus?: boolean;
}>`
	width: fit-content;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: none;
	color: ${({ theme }) => theme.color.tertiary};
	font-size: ${({ focus }) => focus ? '1.5rem' : '1.2rem'};
	font-weight: ${({ focus }) => focus ? '700' : '400'};
	cursor: pointer;
`;
