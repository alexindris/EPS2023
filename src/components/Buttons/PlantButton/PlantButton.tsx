import clsx from 'clsx';
import { PlantButtonProps } from './types';

export const PlantButton = ({ property, status }: PlantButtonProps) => {
  const buttonClassNames = clsx(
    'rounded-2xl text-green-nav text-lg p-3 bg-opacity-20',
    status ? 'bg-green-bg' : 'bg-orange-btn',
  );

  return (
    <div>
      <button className={buttonClassNames}>{property}</button>
    </div>
  );
};
