'use client';

import Image from 'next/image';
import { UserInput } from '@/components/UserInput';
import { SubmitButton } from '@/components/Buttons/SubmitButton';
import { IoMdArrowForward } from 'react-icons/io';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import {
  ModifyProfileType,
  ModifyProfileValidationSchema,
} from '@/validators/modifyProfile.validator';
import { StandardButton } from '@/components/Buttons/StandardButton';
import { useRouter } from 'next/navigation';
import { deleteUser, updateUser } from '@/lib/api';

export default function ProfilePage() {
  const methods = useForm({
    resolver: zodResolver(ModifyProfileValidationSchema),
  });
  const { handleSubmit } = methods;

  const router = useRouter();

  const onSubmit = async (data: ModifyProfileType) => {
    const response = await updateUser(data);
    if (response.status === 200) {
      router.push('/');
    }
  };

  const onDeleteHandler = async () => {
    await deleteUser();
    router.push('/logout');
  };

  const onLogoutHandler = async () => {
    router.push('/logout');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mx-40 items-center text-center flex py-10'>
          <div className='w-1/3'>
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
            <UserInput textInput='Cambiar nombre' name='name' />
            <UserInput
              textInput='Cambiar correo electrónico'
              name='email'
              type='email'
            />
            <UserInput
              textInput='Repetir Correo electrónico'
              name='repeatEmail'
              type='email'
            />
            <UserInput
              textInput='Cambiar Contraseña'
              name='password'
              type='password'
            />
            <UserInput
              textInput='Repetir Contraseña'
              name='passwordConfirmation'
              type='password'
            />
            <div className='flex justify-center space-x-10 mt-10'>
              <SubmitButton
                text='Aceptar cambios'
                className='rounded-full text-white bg-orange-btn p-5 text-sm'
              >
                <IoMdArrowForward className='ml-2' />
              </SubmitButton>

              <StandardButton
                text='Borrar cuenta'
                className='rounded-full text-white bg-orange-btn p-5 text-sm'
                onclick={onDeleteHandler}
              >
                <IoMdArrowForward className='ml-2' />
              </StandardButton>
              <StandardButton
                text='Cerrar sesión'
                className='rounded-full text-white bg-orange-btn p-5 text-sm'
                onclick={onLogoutHandler}
              >
                <IoMdArrowForward className='ml-2' />
              </StandardButton>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
