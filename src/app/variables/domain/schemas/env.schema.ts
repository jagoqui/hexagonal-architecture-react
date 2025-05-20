import { z } from 'zod';

export const envSchema = z.object({
  REACT_APP_API: z.string().url(),
  REACT_APP_NODE_ENV: z
    .literal('development')
    .or(z.literal('production'))
    .or(z.literal('test')),
});

export type Env = Readonly<z.infer<typeof envSchema>>;
