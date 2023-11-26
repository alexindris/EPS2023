import { BadRequestException, NotFoundException } from '@/exceptions';
import { authOptions } from '@/lib/auth';
import { errorHandler } from '@/lib/errorHandler';
import { getPlantById } from '@/repositories/plants';
import { getServerSession } from 'next-auth';

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const session = await getServerSession(authOptions);

    const userId = session?.user?.id;

    if (!userId) {
      throw new BadRequestException('User not found');
    }

    const plantId = params.id;

    const plant = await getPlantById(plantId, userId);

    if (!plant) {
      throw new NotFoundException('Plant not found');
    }

    return Response.json({ plant }, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}
