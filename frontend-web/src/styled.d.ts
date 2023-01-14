import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    boxShadow: string;
		border: string;
		color: {
			primary: string;
			secondary: string;
			tertiary: string;
		}
	}
}
