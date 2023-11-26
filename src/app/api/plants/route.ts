import { errorHandler } from '@/lib/errorHandler';
import { getServerSession } from 'next-auth';
import { getAllPlantsData, uploadNewPlant } from '@/repositories/plants';
import { BadRequestException } from '@/exceptions';
import { NextRequest } from 'next/server';
import { getFile, saveFile } from '@/lib/storage';
import { getFormatedFileProps } from '@/lib/helper';
import { authOptions } from '../auth/[...nextauth]/route';

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
    const formData = await req.formData();
    const file = formData.get('image') as File;
    const name = formData.get('name') as string;

    const { fileName, fileContent } = await getFormatedFileProps(file);
    await saveFile(fileName, fileContent);

    const url = await getFile(fileName);
    await uploadNewPlant(userId, name, url);

    return Response.json({ location: url }, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}
