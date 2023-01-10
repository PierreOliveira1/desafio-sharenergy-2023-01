import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    boxShadow: string;
		color: {
			primary: string;
			secondary: string;
			tertiary: string;
		}
	}
}
