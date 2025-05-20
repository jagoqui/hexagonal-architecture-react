import { z } from "zod";
const BASE_PATH = "/";

export const PATH_NAMES = {
  HOME: BASE_PATH,
  USERS: `${BASE_PATH}users`,
} as const satisfies Record<string, string>;

export const patnamesSchema = z.custom<typeof PATH_NAMES>();

export type Pathnames = z.infer<typeof patnamesSchema>;
