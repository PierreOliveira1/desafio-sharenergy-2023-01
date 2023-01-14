import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	/* background-color: red; */
	padding-top: 60px;

	&::-webkit-scrollbar {
		width: 5px;
	}

	&::-webkit-scrollbar-thumb {
		width: 5px;
	}
`;

export const BoxSearch = styled.div`
	width: 100%;
	height: 20%;
	padding: 0 15%;
	display: flex;
	align-items: center;
	justify-content: center;


`;
