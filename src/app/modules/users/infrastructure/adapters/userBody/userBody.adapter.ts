import { type UserWithPassword } from '../../../domain/schemas/user.schema';
import type { UserWithPasswordDTO } from '../../dtos/user.dto';

export const transformUserBody = (
  body: UserWithPassword
): UserWithPasswordDTO => ({
  nombre: body.name,
  apellido: body.surname,
  correo: body.email,
  contrasena: body.password,
});
