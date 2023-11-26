import clsx from 'clsx';
import { PlantButtonProps } from './types';

export const PlantButton = ({ property, status }: PlantButtonProps) => {
  const buttonClassNames = clsx(
    'rounded-2xl text-green-nav sm:text-sm md:text-sm lg:text-sm xl:text-md p-2 bg-opacity-20',
    status ? 'bg-green-bg' : 'bg-orange-btn',
  );

  return (
    <div className='flex flex-wrap justify-center'>
      <button className={buttonClassNames}>{property}</button>
    </div>
  );
};
