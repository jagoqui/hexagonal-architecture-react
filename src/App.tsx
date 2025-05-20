
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './app/modules/shared/infrastructure/client/tanstackQuery/tanstackQuery.client';
import { RouterProvider } from 'react-router';
import { router } from './app/modules/shared/infrastructure/router/app.router';
import './index.css';

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};