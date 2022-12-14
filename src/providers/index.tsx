import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import routerConfig from '../router';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
});

const AppProvider = () => (
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={routerConfig} />
	</QueryClientProvider>
);

export default AppProvider;
