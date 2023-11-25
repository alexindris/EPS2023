import { z } from 'zod';

export const SignUpValidationSchema = z
  .object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(2),
    passwordConfirmation: z.string().min(2),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ['passwordConfirmation'],
  });

export type SignUpType = z.infer<typeof SignUpValidationSchema>;
