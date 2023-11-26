import { z } from 'zod';

export const CreatePlantValidatorSchema = z.object({
  name: z.string().min(4, { message: 'Name must be at least 4 characters' }),
  image: z.string(),
});

export type CreatePlantValidatorType = z.infer<
  typeof CreatePlantValidatorSchema
>;
