import {
  CompleteMultipartUploadCommandOutput,
  DeleteObjectCommand,
  HeadObjectCommand,
  ListObjectsV2Command,
  S3Client,
} from '@aws-sdk/client-s3';

import { Upload } from '@aws-sdk/lib-storage';

import { NotFoundException } from '@/exceptions';
import {
  AWS_ACCESS_KEY_ID,
  AWS_BUCKET_NAME,
  AWS_DEFAULT_REGION,
  AWS_ENDPOINT,
  AWS_SECRET_ACCESS_KEY,
  NODE_ENV,
} from '@/lib/env';
import { logger } from '@/lib/logger';

const s3 = new S3Client({
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
  endpoint: AWS_ENDPOINT,
  region: AWS_DEFAULT_REGION,
  forcePathStyle: true,
});

export const existsFile = async (fileName: string) => {
  const command = new HeadObjectCommand({
    Bucket: AWS_BUCKET_NAME,
    Key: fileName,
  });

  try {
    return await s3.send(command);
  } catch (error) {
    logger.error('Error al verificar la existencia del archivo:', error);
    throw new NotFoundException('File not found');
  }
};
function createS3ResourceURL(resourceId: string) {
  /* istanbul ignore next */
  if (NODE_ENV === 'production') {
    return `${AWS_ENDPOINT}/${resourceId}`;
  }
  return `${AWS_ENDPOINT}/${AWS_BUCKET_NAME}/${resourceId}`;
}

export const getFile = async (fileName: string) => {
  existsFile(fileName);
  return createS3ResourceURL(fileName);
};

export const deleteFile = async (fileName: string) => {
  const command = new DeleteObjectCommand({
    Bucket: AWS_BUCKET_NAME,
    Key: fileName,
  });

  try {
    await existsFile(fileName);
    const response = await s3.send(command);
    return response;
  } catch (error) {
    logger.error(`Error al eliminar el archivo '${fileName}' de S3:`, error);
    throw error;
  }
};

// If the file already exists (same FileName), it will be overwritten
export const saveFile = async (
  fileName: string,
  fileContent: string | Buffer,
) => {
  const uploadS3 = new Upload({
    client: s3,
    params: {
      Bucket: AWS_BUCKET_NAME,
      Key: fileName,
      Body: fileContent,
    },
  });
  try {
    const response =
      (await uploadS3.done()) as CompleteMultipartUploadCommandOutput;

    return response;
  } catch (error) {
    logger.error('Error al guardar el archivo en S3:', error);
    throw error;
  }
};

export const getAllFiles = async () => {
  const command = new ListObjectsV2Command({
    Bucket: AWS_BUCKET_NAME,
    MaxKeys: 100,
  });

  try {
    const response = await s3.send(command);
    return response;
  } catch (error) {
    logger.error('Error al obtener todos los archivos de S3:', error);
    throw error;
  }
};
