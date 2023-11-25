'use client';

import { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

export async function Providers({ children }: { children: ReactNode }) {
  const session = await getServerSession();
  return <SessionProvider session={session}>{children};</SessionProvider>;
}
