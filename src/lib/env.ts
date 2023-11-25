import { z } from 'zod';
import { logger } from './logger';

const envSchema = z.object({
  NODE_ENV: z.string(),
  NEXTAUTH_URL: z.string(),
  AWS_ACCESS_KEY_ID: z.string(),
  AWS_SECRET_ACCESS_KEY: z.string(),
  AWS_BUCKET_NAME: z.string(),
  AWS_ENDPOINT: z.string(),
  AWS_DEFAULT_REGION: z.string(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  logger.error('Invalid environment variables: ', parsedEnv.error);
  process.exit(1);
}

export const {
  NODE_ENV,
  NEXTAUTH_URL,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET_NAME,
  AWS_ENDPOINT,
  AWS_DEFAULT_REGION,
} = parsedEnv.data;
