'use client';

import { SubmitButton } from '@/components/Buttons/SubmitButton';
import { Plant } from '@/components/Plant';
import { useGetAllPlants } from '@/lib/api';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';

export default function Page() {
  const { data, isLoading } = useGetAllPlants();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='mx-72 items-center text-center'>
      <h1 className='mb-10 text-white text-6xl p-4 font-bold mt-9 '>
        Aquest es el teu Hort, que vols fer?
      </h1>

      <div className='grid grid-cols-3 gap-16'>
        {data &&
          data.plants.map((plant: any) => (
            <Plant
              key={plant.id}
              plantName={plant.imageURL}
              plantId={plant.id}
              props={{
                light: plant.light,
                temperature: plant.temperature,
                soilHumidity: plant.soilHumidity,
              }}
            />
          ))}
      </div>

      <div className='h-64' />
      <Link href='/plants/create'>
        <SubmitButton text='Afegir nova planta'>
          <IoMdArrowForward className='ml-2' />
        </SubmitButton>
      </Link>
    </div>
  );
}
