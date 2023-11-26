'use client';

import Image from 'next/image';
import { UserInput } from '@/components/UserInput';
import { SubmitButton } from '@/components/Buttons/SubmitButton';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';

export default function Page() {
  return (
    <div className='mx-80 items-center text-center flex py-10'>
      <div className='w-1/3'>
        <p className='text-white text-xl mb-4'>Cambiar foto de perfil</p>
        <Image
          className='mx-auto my-auto rounded-full object-cover'
          src='/images/home/farmer1.png'
          alt='descobreix'
          width={400}
          height={500}
          style={{
            background: 'white 50% / cover no-repeat',
            width: '200px', // ajusta el ancho según tus necesidades
            height: '200px', // ajusta la altura según tus necesidades
          }}
        />
        <p className='text-white text-4xl mb-4 font-bold mt-4'>Usuario 1</p>
      </div>
      <div className='w-2/3 rounded-3xl p-4 border border-pop bg-pop  pt-8'>
        <UserInput textInput='Cambiar nombre' />
        <UserInput textInput='Cambiar correo electrónico' />
        <UserInput textInput='Repetir Correo electrónico' />
        <UserInput textInput='Cambiar Contraseña' />
        <UserInput textInput='Repetir Contraseña' />
        <div className='flex justify-center space-x-10 mt-10'>
          <Link href='/dashboard/add-plant'>
            <SubmitButton
              text='Aceptar cambios'
              className='rounded-full text-white bg-orange-btn p-5 text-sm'
            >
              <IoMdArrowForward className='ml-2' />
            </SubmitButton>
          </Link>
          <Link href='/dashboard/add-plant'>
            <SubmitButton
              text='Borrar cuenta'
              className='rounded-full text-white bg-orange-btn p-5 text-sm'
            >
              <IoMdArrowForward className='ml-2' />
            </SubmitButton>
          </Link>
          <Link href='/dashboard/add-plant'>
            <SubmitButton
              text='Cerrar sesión'
              className='rounded-full text-white bg-orange-btn p-5 text-sm'
            >
              <IoMdArrowForward className='ml-2' />
            </SubmitButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
