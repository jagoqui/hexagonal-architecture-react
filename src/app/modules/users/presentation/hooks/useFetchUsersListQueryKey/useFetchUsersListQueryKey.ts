import type { QueryKey } from "@tanstack/react-query";
export const USE_FETCH_USERS_LIST_QUERY_KEY = "USERS_LIST";

interface UseFetchUsersListQueryKeyReturn {
  queryKey: QueryKey;
}

export const useFetchUsersListQueryKey =
  (): UseFetchUsersListQueryKeyReturn => {
    return {
      queryKey: [USE_FETCH_USERS_LIST_QUERY_KEY],
    };
  };
