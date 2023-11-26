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

export const modifyUser = async (
  id: string,
  name?: string,
  email?: string,
  password?: string,
) => {
  try {
    const emailToUpdate = email !== '' ? email : undefined;
    const nameToUpdate = name !== '' ? name : undefined;
    const passwordToUpdate = password !== '' ? password : undefined;

    return prisma.user.update({
      where: {
        id,
      },
      data: {
        name: nameToUpdate,
        email: emailToUpdate,
        password: passwordToUpdate,
      },
    });
  } catch (err) {
    logger.error('Error in modifyUser: ', err);
    throw new BadRequestException('Error in modifyUser');
  }
};

export const deleteUser = async (userId: string) => {
  try {
    return prisma.user.delete({
      where: {
        id: userId,
      },
    });
  } catch (err) {
    logger.error('Error in deleteUser: ', err);
    throw new BadRequestException('Error in deleteUser');
  }
};
