import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServicesContext } from "../../../../shared/presentation/contexts/services/sevicesContext";
import { useToast } from "../../../../shared/presentation/hooks/useToast/useToast";
import {
  type FetchUserCreateBodyService,
  type FetchUsersServices,
} from "../../../domain/services/user.services";
import { useFetchUserCreateMutationKey } from "../useFetchUserCreateMutationKey/useFetchUserCreateMutationKey";
import { useFetchUsersListQueryKey } from "../useFetchUsersListQueryKey/useFetchUsersListQueryKey";

export const useFetchUserCreate = () => {
  const { fetchUserCreateService: mutationFn } =
    useServicesContext<FetchUsersServices>();
  const { mutationKey } = useFetchUserCreateMutationKey();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { queryKey: usersListQueryKey } = useFetchUsersListQueryKey();

  const { isPending, mutate } = useMutation({
    onSuccess: () => {
      toast.dismiss();
      toast.success("User created successfully!");

      queryClient.resetQueries({
        exact: true,
        queryKey: usersListQueryKey,
      });
    },
    onError: (error) => {
      toast.dismiss();
      toast.error(`Error creating user!, ${error.message}`);
    },
    mutationFn,
    mutationKey,
  });

  const onCreateUser = ({ body }: Pick<FetchUserCreateBodyService, "body">) => {
    toast.loading("Creating user", {
      duration: Infinity,
    });

    return mutate({
      body,
    });
  };

  return {
    isPending,
    onCreateUser,
  };
};
