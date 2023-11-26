'use client';

import { croissant } from '@/lib/fonts';
import { UserMenu } from '@/components/UserMenu';
import { usePathname, useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

export const NavBar = () => {
  const path = usePathname();
  const router = useRouter();
  return (
    <nav className='border-gray-200 bg-green-nav'>
      <div
        className={`${croissant.className} flex flex-wrap justify-between items-center mx-6 md:mx-12 lg:mx-24 xl:mx-36 p-2 md:p-3 lg:p-4`}
      >
        {path !== '/' && (
          <IoIosArrowBack
            className='ml-2'
            size={60}
            fill='white'
            cursor='pointer'
            onClick={() => router.back()}
          />
        )}
        <a
          href='/home'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <p className='text-white self-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl whitespace-nowrap'>
            My little garden
          </p>
        </a>
        {path !== '/' && (
          <div className='flex items-center space-x-4 md:space-x-6 rtl:space-x-reverse cursor-pointer'>
            <UserMenu />
          </div>
        )}
      </div>
    </nav>
  );
};
