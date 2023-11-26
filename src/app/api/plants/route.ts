/* eslint-disable camelcase */
import { errorHandler } from '@/lib/errorHandler';
import { getServerSession } from 'next-auth';
import { getAllPlantsData, uploadNewPlant } from '@/repositories/plants';
import { BadRequestException } from '@/exceptions';
import { NextRequest } from 'next/server';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    const userId = session?.user?.id;

    if (!userId) {
      throw new BadRequestException('User not found');
    }

    const plants = await getAllPlantsData(userId);

    plants.map((plant) => {
      return {
        id: plant.id,
        name: plant.name,
        imageURL: plant.imageURL,
        light:
          plant.lightThresholdMin < plant.light &&
          plant.lightThresholdMax > plant.light,
        soilHumidity:
          plant.soilHumidityThresholdMin < plant.soilHumidity &&
          plant.soilHumidityThresholdMax > plant.soilHumidity,
        temperature:
          plant.temperatureThresholdMin < plant.temperature &&
          plant.temperatureThresholdMax > plant.temperature,
      };
    });

    return Response.json({ plants }, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    const userId = session?.user?.id;

    if (!userId) {
      throw new BadRequestException('User not found');
    }
    const { name, image, light, soil_humidity, temperature } =
      (await req.json()) as {
        userId: string;
        name: string;
        image: string;
        light: { min: string; max: string };
        soil_humidity: { min: string; max: string };
        temperature: { min: string; max: string };
      };

    await uploadNewPlant(
      userId,
      name,
      image,
      light,
      soil_humidity,
      temperature,
    );

    return Response.json({ message: 'ok' }, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}
