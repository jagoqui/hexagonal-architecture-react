import { VARIABLES } from "../../../../../variables/infrastructure/constants/variables.contant";
import { api } from "../../../../shared/infrastructure/client/ky/ky.client";
import { userSchema, type User } from "../../../domain/schemas/user.schema";
import type { FetchUserDelete } from "../../../domain/services/user.services";
import { transformUserDto } from "../../adapters/user/user.adapter";
import type { UserDTO } from "../../dtos/user.dto";


export const fetchUserDeleteRequest: FetchUserDelete = async ({
  id
}): Promise<User> => {
  const userDTO = await api
    .delete<UserDTO>(`${VARIABLES.VITE_REACT_APP_API}/users/${id}`)
    .json();

  const user = transformUserDto(userDTO);

  return userSchema.parse(user);
};
