import { type Env } from '../../domain/schemas/env.schema';

import { getEnvs } from '../adapters/env.adapter';

export const VARIABLES: Env = getEnvs();
