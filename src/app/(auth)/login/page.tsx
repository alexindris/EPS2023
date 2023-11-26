'use client';

import { StandardButton } from '@/components/Buttons/StandardButton';
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

import { IoMdArrowForward } from 'react-icons/io';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValidatorType>({
    resolver: zodResolver(LoginValidatorSchema),
  });

  const callbackUrl = '/home';

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
    <div className='mx-4 md:mx-8 lg:mx-16 xl:mx-24 items-center text-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-2xl mx-auto'>
        <h1 className='text-white text-4xl md:text-6xl p-4 font-bold mt-9'>
          Inicia sessió
        </h1>
        <h3 className='text-white text-2xl md:text-3xl p-4 my-4'>
          Les teves plantes et troben a faltar!
        </h3>
        <div className='p-5'>
          <label className='font-bold text-white text-xl md:text-2xl'>
            Correu electrònic
          </label>
          <input
            type='text'
            placeholder='email'
            className='border-2 border-gray-500 rounded-md p-2 my-3 w-full'
            {...register('email')}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className='p-5'>
          <label className='font-bold text-white text-xl md:text-2xl'>
            Contrasenya
          </label>
          <input
            type='password'
            placeholder='password'
            className='border-2 border-gray-500 rounded-md p-2 my-5 w-full'
            {...register('password')}
          />
          {errors.password && (
            <span className='text-red-500 font-bold'>
              {errors.password.message}
            </span>
          )}
        </div>
        <div className='flex justify-center items-center p-5'>
          <Link href='/signup'>
            <StandardButton text='Registrar-se'>
              <IoMdArrowForward className='ml-2' />
            </StandardButton>
          </Link>
          <div className='w-4 md:w-8 lg:w-16' />
          <SubmitButton text='Iniciar sessio'>
            <IoMdArrowForward className='ml-2' />
          </SubmitButton>
          <CustomToastContainer />
        </div>
      </form>
    </div>
  );
}
