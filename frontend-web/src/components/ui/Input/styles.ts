import styled from 'styled-components';

export interface StylesInput {
	width?: string;
	height?: string;
	margin?: string;
}

export const InputContainer = styled.div<StylesInput>`
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '40px'};
	box-shadow: ${({ theme }) => theme.boxShadow};
	border: ${({ theme }) => theme.border};
	margin: ${({ margin }) => margin || '0'};
	border-radius: 10px;
	display: flex;
	background-color: ${({ theme }) => theme.color.tertiary};
`;

export const Input = styled.input`
	width: 100%;
	height: 100%;
	padding: 0 20px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.color.tertiary};
`;

export const Icon = styled.button`
	width: fit-content;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: none;
	padding: 10px;
	cursor: pointer;
`;
