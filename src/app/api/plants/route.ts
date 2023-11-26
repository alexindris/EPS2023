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
    const { name, image } = await req.json();

    await uploadNewPlant(userId, name, image);

    return Response.json({ message: 'ok' }, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}
