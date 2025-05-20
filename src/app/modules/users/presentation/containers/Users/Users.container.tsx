import { useFetchUserCreate } from "../../hooks/useFetchUserCreate/useFetchUserCreate";
import { UsersLayout } from "../../layouts/Users/UsersLayout";

export const Users = () => {
	useFetchUserCreate();

	return <UsersLayout />;
};
