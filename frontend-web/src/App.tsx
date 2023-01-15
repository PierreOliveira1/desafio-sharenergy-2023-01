import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from 'react-query';
import { theme } from '@styles/theme';
import Routes from './routes';
import GlobalStyles from '@styles/GlobalStyles';
import { queryClient } from '@config/queryClient';
import { Loading } from '@components/common/Loading';
import { useLoading } from '@stores/isLoading';
import { useEffect } from 'react';


function App() {
	const { setIsLoading } = useLoading();

	useEffect(() => {
		setIsLoading(true);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Loading />
			<QueryClientProvider client={queryClient}>
				<GlobalStyles />
				<Routes />
			</QueryClientProvider>
		</ThemeProvider>
	);
}

export default App;
