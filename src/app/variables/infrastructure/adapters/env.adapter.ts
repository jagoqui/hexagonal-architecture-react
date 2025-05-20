import { type Env, envSchema } from '../../domain/schemas/env.schema';

export const TEST_ENVS: Env = {
  REACT_APP_API: 'https://api.example.com',
  REACT_APP_NODE_ENV: 'test',
};

export const getEnvs = (): Env => {
  const { success, data, error } = envSchema.safeParse({
    ...(process.env.NODE_ENV === 'test' ? TEST_ENVS : pickEnvVars()),
  });

  if (!success) {
    console.error('Error parsing env variables: ', error.format());

    process.exit(1);
  }

  return data;
};

const pickEnvVars = (): Partial<Env> => ({
  REACT_APP_API: process.env.REACT_APP_API,
  REACT_APP_NODE_ENV: process.env.NODE_ENV,
});
