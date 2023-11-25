import { errorHandler } from '@/lib/errorHandler';
import { checkSentFile, getFormatedFileProps } from '@/lib/helper';
import { getAllFiles, saveFile } from '@/lib/storage';
import { NextRequest } from 'next/server';

export async function GET() {
  try {
    const response = await getAllFiles();
    const { Contents } = response;
    return Response.json(Contents, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('File') as File;

    // Probably better to define these in the env file
    checkSentFile(file, ['text/plain', 'application/pdf'], 1);

    const { fileName, fileContent } = await getFormatedFileProps(file);
    const data = await saveFile(fileName, fileContent);

    return Response.json({ location: data.Location }, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}
