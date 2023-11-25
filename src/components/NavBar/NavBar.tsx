'use client';

import { croissant } from '@/lib/fonts';
import Image from 'next/image';
// eslint-disable-next-line camelcase

export const NavBar = () => {
  return (
    <nav className='border-gray-200 bg-green-nav'>
      <div
        className={`${croissant.className} flex flex-wrap justify-between items-center mx-10 p-4 `}
      >
        <a href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <p className='text-white self-center text-5xl whitespace-nowrap'>
            My little garden
          </p>
        </a>
        <div className='flex items-center space-x-6 rtl:space-x-reverse cursor-pointer'>
          <Image
            src='/images/profile.png'
            alt='profile'
            width={51}
            height={49}
          />
        </div>
      </div>
    </nav>
  );
};
