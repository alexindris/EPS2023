import { NotFoundException } from '@/exceptions';
import { errorHandler } from '@/lib/errorHandler';
import { requireUserId } from '@/lib/session';
import { getHistory, getPlantById } from '@/repositories/plants';

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const userId = await requireUserId();

    const plantId = params.id;
    const ownedPlant = await getPlantById(plantId, userId);

    if (!ownedPlant) {
      throw new NotFoundException('Plant not found');
    }

    const plant = await getHistory(plantId, userId, 7);

    return Response.json({ plant }, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}
