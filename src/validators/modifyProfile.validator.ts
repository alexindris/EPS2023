import { z } from 'zod';

export const ModifyProfileValidationSchema = z
  .object({
    name: z.string().optional(),
    email: z.string().optional(),
    repeatEmail: z.string().optional(),
    password: z.string().optional(),
    passwordConfirmation: z.string().optional(),
  })
  .refine(
    (data) => !data.password || data.password === data.passwordConfirmation,
    {
      message: "Passwords don't match",
      path: ['passwordConfirmation'],
    },
  )
  .refine((data) => !data.email || data.email === data.repeatEmail, {
    message: "Emails don't match",
    path: ['repeatEmail'],
  })
  .refine((data) => !data.password || data.password.length >= 8, {
    message: 'Password must be at least 8 characters long',
    path: ['password'],
  });

export type ModifyProfileType = z.infer<typeof ModifyProfileValidationSchema>;
