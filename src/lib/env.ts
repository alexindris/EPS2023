import { z } from 'zod';
import { logger } from './logger';

const envSchema = z
  .object({
    NODE_ENV: z.enum(['development', 'test', 'production']),
    NEXTAUTH_URL: z.string().url().optional(),
    NEXTAUTH_SECRET: z.preprocess(
      (value) => (value === '' ? undefined : value),
      z.string().min(32).optional(),
    ),
    DB_PRISMA_URL: z.string().url(),
    DB_URL_NON_POOLING: z.string().url(),
  })
  .superRefine((environment, context) => {
    if (environment.NODE_ENV === 'production' && !environment.NEXTAUTH_SECRET) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['NEXTAUTH_SECRET'],
        message: 'NEXTAUTH_SECRET is required in production',
      });
    }
  });

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  logger.error('Invalid environment variables: ', parsedEnv.error);
  process.exit(1);
}

export const {
  NODE_ENV,
  NEXTAUTH_URL,
  NEXTAUTH_SECRET,
  DB_PRISMA_URL,
  DB_URL_NON_POOLING,
} = parsedEnv.data;
