import { BadRequestException } from '@/exceptions';
import { logger } from '@/lib/logger';
import prisma from '@/lib/prisma';

export const createNewUser = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    return prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  } catch (err) {
    logger.error('Error in addNewUser: ', err);
    throw new BadRequestException('Error in addNewUser');
  }
};
