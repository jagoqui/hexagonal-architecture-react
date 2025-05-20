import { DataTable } from "../../../../shared/presentation/components/DataTable/DataTable";
import { useQueryState } from "../../../../shared/presentation/contexts/useQueryState/useQueryState";
import type { User } from "../../../domain/schemas/user.schema";
import { useFetchUserCreate } from "../../hooks/useFetchUserCreate/useFetchUserCreate";
import { useFetchUsersListQueryKey } from "../../hooks/useFetchUsersListQueryKey/useFetchUsersListQueryKey";

export const UsersLayout = () => {
  const { onCreateUser } = useFetchUserCreate();

  const { queryKey } = useFetchUsersListQueryKey();

  const { dataResponse: users, isLoading } = useQueryState<Array<User>>({
    queryKey,
  });

  const createUser = () => {
    return onCreateUser({
      body: {
        email: "test@yopmail.com",
        name: "User",
        surname: "UserTest",
        password: "dfafdafdaf",
      },
    });
  };

  if (isLoading) {
    return <p className="text-gray-500">Loading...</p>;
  }

  return (
    <>
      <button
        onClick={createUser}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Add User
      </button>
      <h1 className="text-xl font-bold mb-4">Users</h1>
      <DataTable<User>
        data={users!}
        columns={["name", "surname", "email"]}
        renderCell={(value, key) =>
          key === "email" ? (
            <a href={`mailto:${value}`}>{String(value)}</a>
          ) : (
            String(value)
          )
        }
      />
    </>
  );
};
