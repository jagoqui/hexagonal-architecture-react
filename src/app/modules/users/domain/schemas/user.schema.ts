import { z } from "zod";

export const MIN_PASSWORD_LENGTH = 6;

const baseUserSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email(),
});

export const userWithPasswordSchema = baseUserSchema.extend({
  password: z.string().min(MIN_PASSWORD_LENGTH, {
    message: `The password should be ${MIN_PASSWORD_LENGTH} characters!`,
  }),
});

export const userSchema = baseUserSchema.extend({
  id: z.number(),
});

export type User = z.infer<typeof userSchema>;
export type UserWithPassword = z.infer<typeof userWithPasswordSchema>;
