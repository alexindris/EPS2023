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

export const getAllPlantsData = async (userId: string) => {
  const plants = await prisma.plant.findMany({
    where: {
      userId,
    },
    include: {
      plantHistory: {
        orderBy: {
          createdAt: 'desc',
        },
        take: 1,
      },
    },
  });

  return plants;
};

export const uploadNewPlant = async (
  userId: string,
  name: string,
  image: string,
) => {
  const plant = await prisma.plant.create({
    data: {
      name,
      imageURL: image,
      userId,
      light: 0,
      soilHumidity: 0,
      airHumidity: 0,
      temperature: 0,
    },
  });

  return plant;
};
