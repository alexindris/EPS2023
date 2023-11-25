'use client';

import { ReactNode } from 'react';
// import { getServerSession } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

export async function Providers({ children }: { children: ReactNode }) {
  return <SessionProvider>{children};</SessionProvider>;
}
