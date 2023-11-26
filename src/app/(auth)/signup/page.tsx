'use client';

import { SubmitButton } from '@/components/Buttons/SubmitButton/SubmitButton';

import { CustomToastContainer } from '@/components/Toast/ErrorToast';
import { createUser } from '@/lib/api';
import {
  SignUpType,
  SignUpValidationSchema,
} from '@/validators/signup.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line import/no-extraneous-dependencies
import { IoMdArrowForward } from 'react-icons/io';

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>({
    resolver: zodResolver(SignUpValidationSchema),
  });

  const onSubmit = async (data: SignUpType) => {
    const callbackUrl = '/';

    const response = await createUser(data);
    if (response.ok) {
      await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: true,
        callbackUrl,
      });
    }
  };

  return (
    <div className='mx-4 md:mx-8 lg:mx-16 xl:mx-24 items-center text-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-2xl mx-auto'>
        <h1 className='text-white text-4xl md:text-6xl p-4 font-bold mt-9'>
          Registra&apos;t
        </h1>
        <h3 className='text-white text-2xl md:text-3xl p-4 my-4'>
          Les teves plantes estan ansioses perquè les cuidis!
        </h3>
        <div className='p-5'>
          <label className='font-bold text-white text-xl md:text-2xl'>
            Nom
          </label>
          <input
            type='text'
            placeholder='name'
            className='border-2 border-gray-500 rounded-md p-2 w-full'
            {...register('name')}
          />
          {errors.name && (
            <span className='text-red-500 font-bold'>
              {errors.name.message}
            </span>
          )}
        </div>

        <div className='p-5'>
          <label className='font-bold text-white text-xl md:text-2xl'>
            Correu electrònic
          </label>
          <input
            type='text'
            placeholder='email'
            className='border-2 border-gray-500 rounded-md p-2 w-full'
            {...register('email')}
          />
          {errors.email && (
            <span className='text-red-500 font-bold'>
              {errors.email.message}
            </span>
          )}
        </div>

        <div className='p-5'>
          <label className='font-bold text-white text-xl md:text-2xl'>
            Contrasenya
          </label>
          <input
            type='password'
            placeholder='password'
            className='border-2 border-gray-500 rounded-md p-2 w-full'
            {...register('password')}
          />
          {errors.password && (
            <span className='text-red-500 font-bold'>
              {errors.password.message}
            </span>
          )}
        </div>

        <div className='p-5'>
          <label className='font-bold text-white text-xl md:text-2xl'>
            Confirma la contrasenya
          </label>
          <input
            type='password'
            placeholder='Confirm password'
            className='border-2 border-gray-500 rounded-md p-2 w-full'
            {...register('passwordConfirmation')}
          />
          {errors.passwordConfirmation && (
            <span className='text-red-500 font-bold'>
              {errors.passwordConfirmation.message}
            </span>
          )}
        </div>

        <div className='flex justify-center items-center p-5'>
          <SubmitButton text='Completar registre'>
            <IoMdArrowForward className='ml-2' />
          </SubmitButton>
          <CustomToastContainer />
        </div>
      </form>
    </div>
  );
}
