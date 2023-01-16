import styled from 'styled-components';

export const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: auto;
	max-height: 200px;
	padding: 2% 0;
	overflow: auto;

	&::-webkit-scrollbar {
		width: 10px;
		background-color: #CCCCCC;
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb {
		width: 10px;
		background-color: #777777;
		border-radius: 10px;
	}
`;

export const BoxHttpCode = styled.div`
	margin: 0 1rem 1rem 0;
`;
