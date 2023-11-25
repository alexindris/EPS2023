import { z } from 'zod';

export const LoginValidatorSchema = z.object({
  email: z.string().email(),
  password: z.string().min(2),
});

export type LoginValidatorType = z.infer<typeof LoginValidatorSchema>;
