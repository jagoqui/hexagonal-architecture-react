import { useFetchUsersList } from "../../hooks/useFetchUsersList/useFetchUsersList";
import { UsersLayout } from "../../layouts/Users/UsersLayout";

export const Users = () => {
  useFetchUsersList();

  return <UsersLayout />;
};
