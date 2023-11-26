import { BadRequestException } from '@/exceptions';
import { authOptions } from '@/lib/auth';
import { errorHandler } from '@/lib/errorHandler';
import { getServerSession } from 'next-auth';
import { NextRequest } from 'next/server';
import bcrypt from 'bcrypt';
import { deleteUser, modifyUser } from '@/repositories/users';
import { UpdateProfile } from '@/lib/types';

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    const userId = session?.user?.id;

    if (!userId) {
      throw new BadRequestException('User not found');
    }

    const body: UpdateProfile = await request.json();
    const { name, email, password } = body;

    let hashedPassword = '';
    if (password && password !== '') {
      hashedPassword = bcrypt.hashSync(password, 10);
    }

    await modifyUser(userId, name, email, hashedPassword);
    return Response.json({ respose: 'ok' }, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}

export async function DELETE() {
  const session = await getServerSession(authOptions);

  const userId = session?.user?.id;

  if (!userId) {
    throw new BadRequestException('User not found');
  }

  await deleteUser(userId);
  return Response.json({ respose: 'ok' }, { status: 200 });
}
