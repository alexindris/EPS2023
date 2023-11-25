import { BadRequestException } from '@/exceptions';

export function isException(error: unknown): asserts error is Error {
  if (!(error instanceof Error)) {
    throw error;
  }
}

export async function getFormatedFileProps(file: File) {
  const fileName = file.name;
  const fileContentArrayBuffer = await file.arrayBuffer(); // Get the file content as a Buffer
  const fileContent = Buffer.from(fileContentArrayBuffer);
  return { fileName, fileContent };
}

export function checkSentFile(
  file: File | null,
  expectedTypes: string[],
  maxSizeMB: number,
) {
  if (!file) throw new BadRequestException('File not found in the request');

  const { size, type } = file;
  const sizeMB = parseFloat((size / 1048576).toFixed(2)); // bytes to MB
  if (!expectedTypes.includes(type)) {
    throw new BadRequestException(
      `File type is not supported. Expected: ${expectedTypes.join(
        ', ',
      )}, received: ${type}`,
    );
  }
  if (sizeMB > maxSizeMB) {
    throw new BadRequestException(
      `File size is too big. Expected: ${maxSizeMB} MB, received: ${sizeMB} MB`,
    );
  }
}
