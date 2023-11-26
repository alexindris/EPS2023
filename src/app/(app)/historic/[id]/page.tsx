'use client';

import { HistoricTable } from '@/components/HistoricTable';
import { useGetPlantHistoric } from '@/lib/api';

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useGetPlantHistoric(params.id.toUpperCase());
  return (
    <>
      {data && (
        <div className='mx-80 items-center text-center py-10'>
          <HistoricTable
            name='Humitat'
            value='soilHumidity'
            data={data.plant}
          />
          <HistoricTable
            name="Humitat de l'aire"
            value='airHumidity'
            data={data.plant}
          />
          <HistoricTable name='Llum' value='light' data={data.plant} />
          <HistoricTable
            name='Temperatura'
            value='temperature'
            data={data.plant}
          />
        </div>
      )}
    </>
  );
}
