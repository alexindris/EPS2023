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

  const images = [
    'coliflor',
    'fresa',
    'oregano',
    'perejil',
    'rucula',
    'tomate',
  ];

  const router = useRouter();
  const onSubmit = async (data: CreatePlantValidatorType) => {
    const response = await createNewPlant(data);
    if (response.status === 200) {
      SuccessToast('Planta creada correctament');
      router.push('/home');
    } else {
      SendErrorToast('Error al crear la planta');
    }
  };

  return (
    <div className='mx-50 items-center text-center'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-white text-6xl p-4 font-bold mt-9 '>
          Afegeix una nova planta
        </h1>
        <h3 className='text-white text-2xl md:text-3xl p-4 my-4'>
          Anem a monitoritzar!
        </h3>
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
          <span className='text-red-500 font-bold'>{errors.name.message}</span>
        )}
        <div className='grid grid-cols-2 items-center p-5'>
          <label className='font-bold text-white text-2xl justify-end text-end mr-10'>
            Selecciona la imatge
          </label>

          <select
            className='border-2 border-gray-500 rounded-md p-2 my-5 max-w-xs'
            {...register('image')}
          >
            <option value=''>Select an image</option>
            {images.map((image) => (
              <option key={image} value={image}>
                {image}
              </option>
            ))}
          </select>
        </div>
        <div className='grid grid-cols-2 items-center p-5 '>
          <label className='font-bold text-white text-2xl justify-end text-end mr-10'>
            Light max value
          </label>
          <input
            type='number'
            placeholder='Light max value'
            className='border-2 border-gray-500 rounded-md p-2  my-3 max-w-xs	'
            {...register('light.max')}
          />
        </div>
        {errors.name && (
          <span className='text-red-500 font-bold'>
            {errors.light?.max?.message}
          </span>
        )}
        <div className='grid grid-cols-2 items-center p-5 '>
          <label className='font-bold text-white text-2xl justify-end text-end mr-10'>
            Light min value
          </label>
          <input
            type='number'
            placeholder='Light min value'
            className='border-2 border-gray-500 rounded-md p-2  my-3 max-w-xs	'
            {...register('light.min')}
          />
        </div>
        {errors.name && (
          <span className='text-red-500 font-bold'>
            {errors.light?.min?.message}
          </span>
        )}
        <div className='grid grid-cols-2 items-center p-5 '>
          <label className='font-bold text-white text-2xl justify-end text-end mr-10'>
            Temperature max value
          </label>
          <input
            type='number'
            placeholder='Temperature max value'
            className='border-2 border-gray-500 rounded-md p-2  my-3 max-w-xs	'
            {...register('temperature.max')}
          />
        </div>
        {errors.name && (
          <span className='text-red-500 font-bold'>
            {errors.temperature?.max?.message}
          </span>
        )}
        <div className='grid grid-cols-2 items-center p-5 '>
          <label className='font-bold text-white text-2xl justify-end text-end mr-10'>
            Temperature min value
          </label>
          <input
            type='number'
            placeholder='Temperature min value'
            className='border-2 border-gray-500 rounded-md p-2  my-3 max-w-xs	'
            {...register('temperature.min')}
          />
        </div>
        {errors.name && (
          <span className='text-red-500 font-bold'>
            {errors.temperature?.min?.message}
          </span>
        )}
        <div className='grid grid-cols-2 items-center p-5 '>
          <label className='font-bold text-white text-2xl justify-end text-end mr-10'>
            Soil humidity max value
          </label>
          <input
            type='number'
            placeholder='Soil humidity max value'
            className='border-2 border-gray-500 rounded-md p-2  my-3 max-w-xs	'
            {...register('soil_humidity.max')}
          />
        </div>
        {errors.name && (
          <span className='text-red-500 font-bold'>
            {errors.soil_humidity?.max?.message}
          </span>
        )}
        <div className='grid grid-cols-2 items-center p-5 '>
          <label className='font-bold text-white text-2xl justify-end text-end mr-10'>
            Soil humidity min value
          </label>
          <input
            type='number'
            placeholder='Soil humidity min value'
            className='border-2 border-gray-500 rounded-md p-2  my-3 max-w-xs	'
            {...register('soil_humidity.min')}
          />
        </div>
        {errors.name && (
          <span className='text-red-500 font-bold'>
            {errors.soil_humidity?.min?.message}
          </span>
        )}
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
