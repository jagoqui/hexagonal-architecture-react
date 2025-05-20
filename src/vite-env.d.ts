/// <reference types="vite/client" />

import { type Env } from "./app/variables/domain/schemas/env.schema"
  
  
interface ImportMeta {
    readonly env: Env
}