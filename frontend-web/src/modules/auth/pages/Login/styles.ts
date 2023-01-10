import styled from 'styled-components';


export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.div`
	width: 50%;
	height: 70%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: red;
	padding: 2rem;
	border-radius: 1rem;

	@media screen and (max-width: 1024px) {
		width: 70%;
	}

	@media screen and  (max-width: 768px) {
		width: 100%;
		height: 100vh;
		border-radius: 0;
	}
`;

export const Logo = styled.img`
	width: 50%;
`;
