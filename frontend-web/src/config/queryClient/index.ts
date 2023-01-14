import { QueryClient } from 'react-query';
import { configQueryClient } from '../configQueryClient';

const queryClient = new QueryClient(configQueryClient);

export { queryClient };
