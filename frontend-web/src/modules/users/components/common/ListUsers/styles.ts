import styled from 'styled-components';

export const Content = styled.div`
	width: 100%;
	height: 80%;
	overflow: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding: 0.3rem;
	box-shadow: 0px -5px 10px rgba(240, 240, 240, 1);

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

export const ContentUser = styled.div`
	width: fit-content;
	height: fit-content;
	margin-bottom: 2rem;
`;
