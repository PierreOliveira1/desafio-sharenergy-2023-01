import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

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
