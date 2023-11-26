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
    <div className='mx-72 items-center text-center'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-white text-6xl p-4 font-bold mt-9 '>
          Registra&apos;t
        </h1>
        <h3 className='text-white text-3xl p-4 my-4'>
          Les teves plantes estan ansioses perque les cuidis!
        </h3>
        <div className='grid grid-cols-1 mx-80'>
          <div className='grid grid-cols-2 items-center p-5 '>
            <label className='font-bold text-white text-2xl justify-end text-end mr-10'>
              Nom
            </label>
            <input
              type='text'
              placeholder='name'
              className='border-2 border-gray-500 rounded-md p-2  max-w-xs	'
              {...register('name')}
            />
          </div>
          {errors.name && (
            <span className='text-red-500 font-bold'>
              {errors.name.message}
            </span>
          )}

          <div className='grid grid-cols-2 items-center p-5 '>
            <label className='font-bold text-white text-2xl justify-end text-end mr-10'>
              Correu electrònic
            </label>

            <input
              type='text'
              placeholder='email'
              className='border-2 border-gray-500 rounded-md p-2  max-w-xs	'
              {...register('email')}
            />
          </div>
          {errors.email && (
            <span className='text-red-500 font-bold'>
              {errors.email.message}
            </span>
          )}

          <div className='grid grid-cols-2 items-center p-5 '>
            <label className='font-bold text-white text-2xl justify-end text-end mr-10'>
              Contrasenya
            </label>

            <input
              type='password'
              placeholder='password'
              className='border-2 border-gray-500 rounded-md p-2 max-w-xs	'
              {...register('password')}
            />
          </div>
          {errors.password && (
            <span className='text-red-500 font-bold'>
              {errors.password.message}
            </span>
          )}

          <div className='grid grid-cols-2 items-center p-5 '>
            <label className='font-bold text-white text-2xl justify-end text-end mr-10'>
              Confirma la contrasenya
            </label>

            <input
              type='password'
              placeholder='Confirm password'
              className='border-2 border-gray-500 rounded-md p-2 max-w-xs	'
              {...register('passwordConfirmation')}
            />
          </div>
          {errors.passwordConfirmation && (
            <span className='text-red-500 font-bold'>
              {errors.passwordConfirmation.message}
            </span>
          )}
        </div>

        <div className=' flex justify-center items-center p-5 '>
          <SubmitButton text='Completar registre'>
            <IoMdArrowForward className='ml-2' />
          </SubmitButton>
          <CustomToastContainer />
        </div>
      </form>
    </div>
  );
}
