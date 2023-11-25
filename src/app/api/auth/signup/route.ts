import { errorHandler } from '@/lib/errorHandler';
import { createNewUser } from '@/repositories/users';
import { NextRequest } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    const hashedPassword = bcrypt.hashSync(password, 10);

    createNewUser(name, email, hashedPassword);
    return Response.json({ respose: 'ok' }, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}
