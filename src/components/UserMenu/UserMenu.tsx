import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';
import { StandardButton } from '@/components/Buttons/StandardButton';

export const UserMenu = () => {
  return (
    <Popover className='relative'>
      <>
        <Popover.Button>
          <Image
            src='/images/profile.png'
            alt='profile'
            width={51}
            height={49}
          />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-200'
          enterFrom='opacity-0 translate-y-1'
          enterTo='opacity-100 translate-y-0'
          leave='transition ease-in duration-150'
          leaveFrom='opacity-100 translate-y-0'
          leaveTo='opacity-0 translate-y-1'
        >
          <Popover.Panel className='absolute z-10 mt-5 -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl'>
            <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-green-nav z-50'>
              <div className=' bg-green-nav w-40  py-4'>
                <div className='flex flex-col items-center justify-center text-center'>
                  <Image
                    src='/images/profile.png'
                    alt='profile'
                    width={51}
                    height={49}
                  />
                  <p className='text-white font-bold text-1xl mt-2'>Qui ets?</p>
                </div>
              </div>
            </div>
            <div className='relative overflow-hidden rounded-lg shadow-lg ring-1 ring-light-green-slide top-[-10px] -z-10'>
              <div className=' bg-light-green-slide w-40  py-4 -z-10 pt-8'>
                <div className='flex flex-col items-center justify-center text-center'>
                  <Link href='/profile'>
                    <StandardButton
                      text='Editar perfil'
                      className='rounded-full text-white bg-orange-btn p-5 text-xs mb-4'
                    >
                      <IoMdArrowForward className='ml-2' />
                    </StandardButton>
                  </Link>
                  <Link href='/logout'>
                    <StandardButton
                      text='Tancar sessió'
                      className='rounded-full text-white bg-orange-btn p-5 text-xs'
                    >
                      <IoMdArrowForward className='ml-2' />
                    </StandardButton>
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  );
};
