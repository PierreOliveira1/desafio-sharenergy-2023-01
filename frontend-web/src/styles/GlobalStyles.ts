import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

	* {
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
	}

	:root {
		width: 100vw;
		height: 100vh;
	}
`;

export default GlobalStyles;
