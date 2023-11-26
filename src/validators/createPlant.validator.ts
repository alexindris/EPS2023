import { z } from 'zod';

const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const CreatePlantValidatorSchema = z.object({
  name: z.string().min(4, { message: 'Name must be at least 4 characters' }),
  image: z
    .any()
    .refine((files) => {
      return files?.[0]?.size > 0;
    }, 'Image is required.')
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.',
    ),
});

export type CreatePlantValidatorType = z.infer<
  typeof CreatePlantValidatorSchema
>;
