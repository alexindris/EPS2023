import { NotFoundException } from '@/exceptions';
import { errorHandler } from '@/lib/errorHandler';
import { requireUserId } from '@/lib/session';
import { getPlantById } from '@/repositories/plants';

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const userId = await requireUserId();

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
