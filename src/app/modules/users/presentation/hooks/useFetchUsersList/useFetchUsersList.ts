import { useQuery } from "@tanstack/react-query";
import { useServicesContext } from "../../../../shared/presentation/contexts/services/sevicesContext";
import type { FetchUsersServices } from "../../../domain/services/user.services";
import { useFetchUsersListQueryKey } from "../useFetchUsersListQueryKey/useFetchUsersListQueryKey";

export const useFetchUsersList = () => {
  const { fetchUsersListService: queryFn } =
    useServicesContext<FetchUsersServices>();
  const { queryKey } = useFetchUsersListQueryKey();

  const { data } = useQuery({
    queryFn,
    queryKey,
  });

  return {
    data,
  };
};
