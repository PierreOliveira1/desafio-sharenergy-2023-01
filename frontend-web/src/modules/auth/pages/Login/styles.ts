import styled from 'styled-components';


export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url('https://www.sharenergy.com.br/wp-content/uploads/2017/12/Setor-Solar.jpg');
	background-size: cover;
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
	background: rgba( 255, 255, 255, 0.35 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 13.5px );

	@media screen and (max-width: 1024px) {
		width: 70%;
	}

	@media screen and  (max-width: 768px) {
		width: 85%;
		height: 85%;
	}
`;

export const Logo = styled.img`
	width: 50%;

	@media screen and (max-width: 1400px) {
		width: 60%;
	}

	@media screen and (max-width: 1024px) {
		width: 65%;
	}

	@media screen and  (max-width: 768px) {
		width: 70%;
	}
`;

export const Form = styled.form`
	width: 100%;
	display: flex;
	align-items	: center;
	flex-direction: column;
	margin-top: 3rem;
`;

export const BoxInputCheckbox = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 2rem 0;
`;

export const BoxCheckbox = styled.div`
	width: 80%;
`;
