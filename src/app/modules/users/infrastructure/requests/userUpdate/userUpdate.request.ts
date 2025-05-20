import { VARIABLES } from "../../../../../variables/infrastructure/constants/variables.contant";
import { api } from "../../../../shared/infrastructure/client/ky/ky.client";
import { userSchema, type User } from "../../../domain/schemas/user.schema";
import type { FetchUserUpdate } from "../../../domain/services/user.services";
import { transformUserDto } from "../../adapters/user/user.adapter";
import { transformUserBody } from "../../adapters/userBody/userBody.adapter";
import type { UserDTO } from "../../dtos/user.dto";

export const fetchUserUpdateRequest: FetchUserUpdate = async ({
  body,
  id,
}): Promise<User> => {
  const userDTO = await api
    .put<UserDTO>(`${VARIABLES.VITE_REACT_APP_API}/users/${id}`, {
      json: transformUserBody(body),
    })
    .json();

  const user = transformUserDto(userDTO);

  return userSchema.parse(user);
};
