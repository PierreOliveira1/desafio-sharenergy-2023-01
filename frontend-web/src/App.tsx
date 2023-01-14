import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from '@styles/theme';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import { configQueryClient } from './config/configQueryClient';

const queryClient = new QueryClient(configQueryClient);

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
