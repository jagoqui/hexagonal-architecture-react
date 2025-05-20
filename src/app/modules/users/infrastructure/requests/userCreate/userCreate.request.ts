import { VARIABLES } from "../../../../../variables/infrastructure/constants/variables.contant";
import { api } from "../../../../shared/infrastructure/client/ky/ky.client";
import { userSchema, type User } from "../../../domain/schemas/user.schema";
import type {  FetchUserCreateService } from "../../../domain/services/user.services";
import { transformUserDto } from "../../adapters/user/user.adapter";
import { transformUserBody } from "../../adapters/userBody/userBody.adapter";
import type { UserDTO } from "../../dtos/user.dto";

export const fetchUserCreateRequest: FetchUserCreateService = async ({
  body,
}): Promise<User> => {
  const userDTO = await api
    .post<UserDTO>(`${VARIABLES.REACT_APP_API}/user`, {
      json: transformUserBody(body),
    })
    .json();

  const user = transformUserDto(userDTO);

  return userSchema.parse(user);
};
