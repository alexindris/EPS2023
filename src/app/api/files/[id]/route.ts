import { errorHandler } from '@/lib/errorHandler';
import { deleteFile, existsFile, getFile } from '@/lib/storage';

// GET URL from file
export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  try {
    await existsFile(id);
    const resourceURL = getFile(id);

    return Response.json(resourceURL, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;
    await deleteFile(id);
    return new Response(null, { status: 204 });
  } catch (error) {
    return errorHandler(error);
  }
}
