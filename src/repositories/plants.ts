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
            date: new Date(),
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

export const getPlantById = async (plantId: string, userId: string) => {
  const plant = await prisma.plant.findUnique({
    where: {
      id: plantId,
      userId,
    },
  });

  return plant;
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

export const getHistory = async (plantId: string, days: number) => {
  const firstDay = new Date();
  const today = new Date();
  firstDay.setDate(firstDay.getDate() - days);
  const result = await prisma.plantHistory.groupBy({
    by: ['date'],
    where: {
      plantId,
      createdAt: {
        gte: firstDay.toISOString(),
        lte: today.toISOString(),
      },
    },
    _avg: {
      light: true,
      soilHumidity: true,
      airHumidity: true,
      temperature: true,
    },
  });
  return result;
};
