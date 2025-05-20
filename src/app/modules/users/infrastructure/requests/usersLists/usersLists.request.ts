import { VARIABLES } from "../../../../../variables/infrastructure/constants/variables.contant";
import { api } from "../../../../shared/infrastructure/client/ky/ky.client";
import { userSchema, type User } from "../../../domain/schemas/user.schema";
import type {FetchUsersList } from "../../../domain/services/user.services";
import { transformUserDto } from "../../adapters/user/user.adapter";
import type { UserDTO } from "../../dtos/user.dto";


export const fetchUsersListRequest: FetchUsersList = async (): Promise<Array<User>> => {
  const usersDTO = await api
    .patch<Array<UserDTO>>(`${VARIABLES.VITE_REACT_APP_API}/users`)
    .json();

  const users = usersDTO.map((user) => transformUserDto(user));

  return userSchema.array().parse(users);
};
