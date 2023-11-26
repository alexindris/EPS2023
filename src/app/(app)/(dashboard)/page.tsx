'use client';

import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';
import Image from 'next/image';
import { StandardButton } from '@/components/Buttons/StandardButton';

export default function Page() {
  return (
    <>
      <div className='mx-6 md:mx-12 lg:mx-24 xl:mx-36 items-center text-center'>
        <h1 className='mb-6 md:mb-8 lg:mb-10 text-white text-3xl md:text-4xl lg:text-5xl p-2 md:p-3 lg:p-4 font-bold mt-6 md:mt-8 lg:mt-9'>
          Descobreix la millor manera de cuidar les teves plantes
        </h1>

        <Image
          className='mx-auto my-auto'
          src='/images/home/discover.jpg'
          alt='descobreix'
          width={800}
          height={500}
        />
        <div className='h-2' />
        <div className='flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4'>
          <Link href='/home'>
            <StandardButton text='Anar al teu hort'>
              <IoMdArrowForward className='ml-2' />
            </StandardButton>
          </Link>
          <Link href='/signup'>
            <StandardButton text='Crear un hort'>
              <IoMdArrowForward className='ml-2' />
            </StandardButton>
          </Link>
        </div>
        <div className='h-6 md:h-10' />
      </div>

      <div className='w-full bg-light-green-slide'>
        <div className='mx-6 md:mx-12 lg:mx-24 xl:mx-36 items-center text-center flex flex-col md:flex-row py-6 md:py-10'>
          <div className='w-full md:w-1/2'>
            <Image
              className='mx-auto my-auto'
              src='/images/home/farmer1.png'
              alt='descobreix'
              width={400}
              height={500}
            />
          </div>
          <div className='w-full md:w-1/2 p-4'>
            <p className='mb-6 md:mb-8 lg:mb-10 text-green-nav text-lg md:text-3xl p-2 md:p-3 lg:p-4 font-bold mt-6 md:mt-8 lg:mt-9'>
              Afegeix les teves precioses plantes i descobreix quines són les
              seves necessitats
            </p>
          </div>
        </div>
      </div>

      <div className='w-full'>
        <div className='mx-6 md:mx-12 lg:mx-24 xl:mx-36 items-center text-center flex flex-col md:flex-row py-6 md:py-10'>
          <div className='w-full md:w-1/2 p-4'>
            <p className='mb-6 md:mb-8 lg:mb-10 text-white text-lg md:text-3xl p-2 md:p-3 lg:p-4 font-bold mt-6 md:mt-8 lg:mt-9'>
              Descobriràs com i quan regar-les
            </p>
          </div>
          <div className='w-full md:w-1/2'>
            <Image
              className='mx-auto my-auto'
              src='/images/home/farmer2.png'
              alt='descobreix'
              width={400}
              height={500}
            />
          </div>
        </div>
      </div>

      <div className='w-full bg-light-green-slide'>
        <div className='mx-6 md:mx-12 lg:mx-24 xl:mx-36 items-center text-center flex flex-col md:flex-row py-6 md:py-10'>
          <div className='w-full md:w-1/2'>
            <Image
              className='mx-auto my-auto'
              src='/images/home/planta.png'
              alt='descobreix'
              width={233}
              height={400}
            />
          </div>
          <div className='w-full md:w-1/2 p-4'>
            <p className='mb-6 md:mb-8 lg:mb-10 text-green-nav text-lg md:text-3xl p-2 md:p-3 lg:p-4 font-bold mt-6 md:mt-8 lg:mt-9'>
              Podràs seguir el seu creixement i quan et donarà els seus fruits
            </p>
          </div>
        </div>
      </div>

      <div className='w-full '>
        <div className='mx-6 md:mx-12 lg:mx-24 xl:mx-36 items-center text-center py-6 md:py-10'>
          <h1 className='mb-6 md:mb-8 lg:mb-10 text-white text-3xl md:text-4xl lg:text-5xl p-2 md:p-3 lg:p-4 font-bold mt-6 md:mt-8 lg:mt-9'>
            Si encara no tens un hort, crea&apos;l ara gratuïtament!
          </h1>
          <Link href='/signup'>
            <StandardButton text='Crear un hort'>
              <IoMdArrowForward className='ml-2' />
            </StandardButton>
          </Link>
        </div>
      </div>
    </>
  );
}
