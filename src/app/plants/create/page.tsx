'use client';

import { SubmitButton } from '@/components/Buttons/SubmitButton/SubmitButton';

import {
  CustomToastContainer,
  SendErrorToast,
  SuccessToast,
} from '@/components/Toast/ErrorToast';
import { createNewPlant } from '@/lib/api';
import {
  CreatePlantValidatorSchema,
  CreatePlantValidatorType,
} from '@/validators/createPlant.validator';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';

import { IoMdArrowForward } from 'react-icons/io';

export default function CreateNewPlantPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePlantValidatorType>({
    resolver: zodResolver(CreatePlantValidatorSchema),
  });

  const router = useRouter();
  const onSubmit = async (data: CreatePlantValidatorType) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('image', data.image[0] as File);

    const response = await createNewPlant(formData);
    if (response.status === 200) {
      SuccessToast('Planta creada correctament');
      router.push('/');
    } else {
      SendErrorToast('Error al crear la planta');
    }
  };

  return (
    <div className='mx-72 items-center text-center'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-white text-6xl p-4 font-bold mt-9 '>
          Afegeix una nova planta
        </h1>
        <h3 className='text-white text-3xl p-4 my-4'>Anem a monitoritzar!</h3>
        <div className='grid grid-cols-1 mx-80'>
          <div className='grid grid-cols-2 items-center p-5 '>
            <label className='font-bold text-white text-2xl justify-end text-end mr-10'>
              Nom
            </label>
            <input
              type='text'
              placeholder='name'
              className='border-2 border-gray-500 rounded-md p-2  my-3 max-w-xs	'
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
              Selecciona la imatge
            </label>
            <input
              type='file'
              placeholder='password'
              className='border-2 border-gray-500 rounded-md p-2 my-5 max-w-xs	'
              {...register('image')}
            />
          </div>
          {errors.image && (
            <span className='text-red-500 font-bold'>
              {errors.image?.message as string}
            </span>
          )}
        </div>
        <div className=' flex justify-center items-center p-5 '>
          <div className='w-16' />
          <SubmitButton text='Afegir una nova planta'>
            <IoMdArrowForward className='ml-2' />
          </SubmitButton>
          <CustomToastContainer />
        </div>
      </form>
      <CustomToastContainer />
    </div>
  );
}
