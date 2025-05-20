import { type Env } from '../../domain/schemas/env.schema';

declare global {
  interface ImportMeta {
    readonly env: Env;
    readonly MODE: Env['VITE_REACT_APP_MODE'];
  }

  namespace NodeJS {
    interface ProcessEnv extends Env {
      readonly MODE: Env['VITE_REACT_APP_MODE'];
    }
  }
}

export {};
