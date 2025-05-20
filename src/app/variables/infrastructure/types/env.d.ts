import { type Env } from '../../domain/schemas/env.schema';

declare global {
  interface ImportMeta {
    readonly env: Env;
  }

  namespace NodeJS {
    interface ProcessEnv extends Env {
      NODE_ENV: Env['REACT_APP_NODE_ENV'];
    }
  }
}

export {};
