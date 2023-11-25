/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { SubmitButton } from '@/components/Buttons/SubmitButton';
import { Plant } from '@/components/Plant';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';

export default function Page() {
  return (
    <div className='mx-72 items-center text-center'>
      <h1 className='mb-10 text-white text-6xl p-4 font-bold mt-9 '>
        Aquest es el teu Hort, que vols fer?
      </h1>

      <div className='grid grid-cols-3 gap-16'>
        <Plant
          plantName='oregano'
          props={{
            light: 'sunny',
            temperature: 'hot',
            soilHumidity: 'dry',
            // airHumidity: 'dry',
          }}
        />
        <Plant
          plantName='fresa'
          props={{
            light: 'sunny',
            temperature: 'hot',
            soilHumidity: 'dry',
            // airHumidity: 'dry',
          }}
        />
        <Plant
          plantName='coliflor'
          props={{
            light: 'sunny',
            temperature: 'hot',
            soilHumidity: 'dry',
            // airHumidity: 'dry',
          }}
        />
      </div>

      <div className='h-64' />
      <Link href='/dashboard/add-plant'>
        <SubmitButton text='Afegir nova planta'>
          <IoMdArrowForward className='ml-2' />
        </SubmitButton>
      </Link>
    </div>
  );
}
