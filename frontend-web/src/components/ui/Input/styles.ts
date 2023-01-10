import styled from 'styled-components';

export const Input = styled.input<{
	width?: string;
	height?: string;
}>`
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '40px'};
	padding: 10px;
	border-radius: 10px;
	box-shadow: ${({ theme }) => theme.boxShadow};
`;
