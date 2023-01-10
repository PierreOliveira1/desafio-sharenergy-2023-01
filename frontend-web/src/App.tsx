import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from '@styles/theme';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

const queryClient = new QueryClient();

function App() {
	return (
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<GlobalStyles />
				<Routes />
			</QueryClientProvider>
		</ThemeProvider>
	);
}

export default App;
