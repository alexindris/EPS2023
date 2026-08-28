import { UnauthorizedException } from '@/exceptions';
import { getServerSession } from 'next-auth';
import { authOptions } from './auth';

export async function requireUserId() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    throw new UnauthorizedException('Authentication required');
  }

  return userId;
}
