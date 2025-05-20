interface BaseUserDTO {
  nombre: string;
  apellido: string;
  correo: string;
}
  
export type UserDTO = BaseUserDTO & {
  id: string;
};

export type UserWithPasswordDTO = BaseUserDTO & {
  contrasena: string;
};
