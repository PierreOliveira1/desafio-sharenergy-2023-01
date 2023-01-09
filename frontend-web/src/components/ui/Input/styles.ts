import styled from 'styled-components';

export const Input = styled.input<{
	width?: string;
	height?: string;
}>`
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '50px'};
`;
