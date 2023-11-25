/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { SubmitButton } from '@/components/Buttons/SubmitButton';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <div className='mx-72 items-center text-center'>
        <h1 className='mb-10 text-white text-5xl p-4 font-bold mt-9 '>
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
        <div className='flex justify-center space-x-10'>
          <Link href='/dashboard/add-plant'>
            <SubmitButton text='Anar al teu hort'>
              <IoMdArrowForward className='ml-2' />
            </SubmitButton>
          </Link>
          <Link href='/dashboard/add-plant'>
            <SubmitButton text='Crear un hort'>
              <IoMdArrowForward className='ml-2' />
            </SubmitButton>
          </Link>
        </div>
        <div className='h-10' />
      </div>
      <div className='w-full bg-light-green-slide'>
        <div className='mx-80 items-center text-center flex py-10'>
          <div className='w-1/2'>
            <Image
              className='mx-auto my-auto'
              src='/images/home/farmer1.png'
              alt='descobreix'
              width={400}
              height={500}
            />
          </div>
          <div className='w-1/2 p-4'>
            <p className='mb-10 text-green-nav text-3xl p-4 font-bold mt-9'>
              Afegeix les teves precioses plantes i descobreix quines són les
              seves necessitats
            </p>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='mx-80 items-center text-center flex py-10'>
          <div className='w-1/2 p-4'>
            <p className='mb-10 text-white text-3xl p-4 font-bold mt-9'>
              Descobriràs com i quan regar-les
            </p>
          </div>
          <div className='w-1/2'>
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
        <div className='mx-80 items-center text-center flex py-10'>
          <div className='w-1/2'>
            <Image
              className='mx-auto my-auto'
              src='/images/home/planta.png'
              alt='descobreix'
              width={233}
              height={400}
            />
          </div>
          <div className='w-1/2 p-4'>
            <p className='mb-10 text-green-nav text-3xl p-4 font-bold mt-9'>
              Podràs seguir el seu creixement i quan et donarà els seus fruits
            </p>
          </div>
        </div>
      </div>
      <div className='w-full '>
        <div className='mx-80 items-center text-center py-10'>
          <h1 className='mb-10 text-white text-5xl p-4 font-bold mt-9 '>
            Si encara no tens un hort, crea'l ara gratuïtament!
          </h1>
          <Link href='/dashboard/add-plant'>
            <SubmitButton text='Crear un hort'>
              <IoMdArrowForward className='ml-2' />
            </SubmitButton>
          </Link>
        </div>
      </div>
    </>
  );
}
