'use client';

import { signOut } from 'next-auth/react';
import { useEffect } from 'react';

export default function LogOut() {
  useEffect(() => {
    signOut({ callbackUrl: '/' });
  }, []);
  return <div></div>;
}
