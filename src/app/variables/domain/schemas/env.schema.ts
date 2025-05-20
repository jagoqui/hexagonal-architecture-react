import { z } from 'zod';

export const envSchema = z.object({
  VITE_REACT_APP_API: z.string().url(),
  VITE_REACT_APP_MODE: z
    .literal('development')
    .or(z.literal('production'))
    .or(z.literal('test')),
});

export type Env = Readonly<z.infer<typeof envSchema>>;
