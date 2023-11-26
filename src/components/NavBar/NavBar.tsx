'use client';

import { croissant } from '@/lib/fonts';
import { UserMenu } from '@/components/UserMenu';

export const NavBar = () => {
  return (
    <nav className='border-gray-200 bg-green-nav'>
      <div
        className={`${croissant.className} flex flex-wrap justify-between items-center mx-10 p-4 `}
      >
        <a
          href='/home'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <p className='text-white self-center text-5xl whitespace-nowrap'>
            My little garden
          </p>
        </a>
        <div className='flex items-center space-x-6 rtl:space-x-reverse cursor-pointer'>
          <UserMenu />
        </div>
      </div>
    </nav>
  );
};
