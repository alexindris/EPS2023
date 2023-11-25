import { logger } from '@/lib/logger';
import prisma from '../lib/prisma';

export const addIncomingPlanData = async (data: unknown) => {
  const parsedData = data as {
    id: string;
    light: number;
    soil_humidity: number;
    air_humidity: number;
    temperature: number;
  };
  try {
    await prisma.plant.findUniqueOrThrow({
      where: {
        id: parsedData.id,
      },
    });

    await prisma.plant.update({
      where: {
        id: parsedData.id,
      },
      data: {
        light: parsedData.light,
        soilHumidity: parsedData.soil_humidity,
        airHumidity: parsedData.air_humidity,
        temperature: parsedData.temperature,
        plantHistory: {
          create: {
            light: parsedData.light,
            soilHumidity: parsedData.soil_humidity,
            airHumidity: parsedData.air_humidity,
            temperature: parsedData.temperature,
          },
        },
      },
    });
  } catch (e) {
    logger.debug(`Plant not found: ${parsedData.id}`);
  }
};
