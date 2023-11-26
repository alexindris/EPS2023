import { z } from 'zod';

function createThresholdValidator(fieldName: string) {
  return z
    .object({
      min: z.string(), // Allow strings for min and max
      max: z.string(),
    })
    .refine(
      (data) => {
        // Convert string values to numbers
        const min = parseFloat(data.min);
        const max = parseFloat(data.max);

        // Check if the conversion was successful and min is less than max
        return !Number.isNaN(min) && !Number.isNaN(max) && min < max;
      },
      {
        message: `${fieldName} min value must be a valid number and less than max value`,
      },
    );
}
export const CreatePlantValidatorSchema = z.object({
  name: z.string().min(4, { message: 'Name must be at least 4 characters' }),
  image: z.string(),
  // i need to create a threshold validator for 4 fields light humidity of the soil and temperature the user is able to set a min and max value for each of them
  light: createThresholdValidator('Light'),
  soil_humidity: createThresholdValidator('Soil Humidity'),
  temperature: createThresholdValidator('Temperature'),
});

export type CreatePlantValidatorType = z.infer<
  typeof CreatePlantValidatorSchema
>;
