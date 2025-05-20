import { type QueryKey, useQueryClient } from '@tanstack/react-query';

interface UseQueryStateProps {
	queryKey: QueryKey;
}

export const useQueryState = <Data>({
	queryKey,
}: UseQueryStateProps): {
	cachedData: Data | undefined;
	dataResponse: Data | undefined;
	isLoading: boolean;
} => {
	const queryClient = useQueryClient();

	const queryData =
		queryClient.getQueryData<Data>(queryKey);

	const queryState =
		queryClient.getQueryState<Data>(queryKey);

	return {
		cachedData: queryData,
		dataResponse: queryState?.data,
		isLoading: queryState?.status === 'pending',
	};
};
