import { type Env, envSchema } from '../../domain/schemas/env.schema';

export const TEST_ENVS: Env = {
  VITE_REACT_APP_API: 'https://api.example.com',
  VITE_REACT_APP_MODE: 'test',
};

export const getEnvs = (): Env => {
  const { success, data, error } = envSchema.safeParse({
    ...(import.meta.env.MODE === 'test' ? TEST_ENVS : pickEnvVars()),
  });

  if (!success) {
    console.error('Error parsing env variables: ', error.format());

    console.log({
        envs: import.meta.env
    })

    process.exit(1);
  }

  return data;
};

const pickEnvVars = (): Partial<Env> => ({
  VITE_REACT_APP_API:import.meta.env.VITE_REACT_APP_API,
  VITE_REACT_APP_MODE: import.meta.env.MODE,
});
