'use client';

import { SubmitButton } from '@/components/Buttons/SubmitButton/SubmitButton';

import {
  CustomToastContainer,
  SendErrorToast,
} from '@/components/Toast/ErrorToast';
import {
  LoginValidatorSchema,
  LoginValidatorType,
} from '@/validators/login.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line import/no-extraneous-dependencies
import { IoMdArrowForward } from 'react-icons/io';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValidatorType>({
    resolver: zodResolver(LoginValidatorSchema),
  });

  const callbackUrl = '/';

  const router = useRouter();
  const onSubmit = async (data: LoginValidatorType) => {
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        SendErrorToast('Error al iniciar sessió');
      }
    } catch (error) {
      SendErrorToast('Algo ha anat malament');
    }
  };

  return (
    <div className='mx-72 items-center text-center'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-white text-6xl p-4 font-bold mt-9 '>
          Inicia sessió
        </h1>
        <h3 className='text-white text-3xl p-4 my-4'>
          Les teves plantes et troben a faltar!
        </h3>
        <div className='grid grid-cols-1 mx-80'>
          <div className='grid grid-cols-2 items-center p-5 '>
            <label className='font-bold text-white text-2xl justify-end text-end mr-10'>
              Correu electrònic
            </label>

            <input
              type='text'
              placeholder='email'
              className='border-2 border-gray-500 rounded-md p-2  my-3 max-w-xs	'
              {...register('email')}
            />
          </div>
          {errors.email && <span>{errors.email.message}</span>}

          <div className='grid grid-cols-2 items-center p-5 '>
            <label className='font-bold text-white text-2xl justify-end text-end mr-10'>
              Contrasenya
            </label>

            <input
              type='password'
              placeholder='password'
              className='border-2 border-gray-500 rounded-md p-2 my-5 max-w-xs	'
              {...register('password')}
            />
          </div>
          {errors.password && (
            <span className='text-red-500 font-bold'>
              {errors.password.message}
            </span>
          )}
        </div>
        <div className=' flex justify-center items-center p-5 '>
          <Link href='/signup'>
            <SubmitButton text='Registrar-se'>
              <IoMdArrowForward className='ml-2' />
            </SubmitButton>
          </Link>
          <div className='w-16' />
          <SubmitButton text='Iniciar sessio'>
            <IoMdArrowForward className='ml-2' />
          </SubmitButton>
          <CustomToastContainer />
        </div>
      </form>
    </div>
  );
}
