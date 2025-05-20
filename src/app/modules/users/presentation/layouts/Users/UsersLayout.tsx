import { useFetchUserCreate } from "../../hooks/useFetchUserCreate/useFetchUserCreate";

export const UsersLayout = () => {
    const { onCreateUser} =
    useFetchUserCreate();


    const createUser =() => {
        return onCreateUser({
            body: {
                email: 'yopmail.test.com',
                name: 'User',
                surname: 'UserTest',
                password: 'dfafdafdaf'
            }
        })
    }
    return (<>
    <button onClick={createUser} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
    Button
    </button>
  </>)
}