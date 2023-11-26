import Image from 'next/image';
import Link from 'next/link';
import { PlantProps } from './types';
import { PlantButton } from '../Buttons/PlantButton';

export const Plant = ({ plantName, plantId, props }: PlantProps) => {
  const keys = Object.keys(props);
  const values = Object.values(props);

  return (
    <Link href={`/plant/${plantId}`}>
      <div className='grid grid-cols-2 bg-white rounded-3xl divide-x-2'>
        <div className='flex items-center justify-center'>
          <Image
            src={`/public/images/plants/${plantName}.png`}
            alt='Plant'
            width={200}
            height={200}
          />
        </div>
        <div className='grid grid-cols-1 gap-2 p-3 items-center justify-center'>
          {keys.map((key, index) => (
            <PlantButton key={key} property={key} status={!!values[index]} />
          ))}
        </div>
      </div>
    </Link>
  );
};
