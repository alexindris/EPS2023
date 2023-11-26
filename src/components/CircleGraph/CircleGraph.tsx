import { CircleGraphProps } from './types';

export const CircleGraph = ({
  texto,
  porcentaje,
  degrees,
}: CircleGraphProps) => {
  const radio = 50;
  const longitudBorde =
    (degrees ? 100 : porcentaje / 100) * (2 * Math.PI * radio);

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='relative w-16 h-16'>
        <svg
          className='absolute'
          width='100%'
          height='100%'
          viewBox={`0 0 ${2 * radio} ${2 * radio}`}
        >
          <circle cx={radio} cy={radio} r={radio} fill='white' />
          <circle
            cx={radio}
            cy={radio}
            r={radio - 4}
            fill='transparent'
            stroke='#74943F'
            strokeWidth='8'
            strokeDasharray={`${longitudBorde} ${2 * Math.PI * radio}`}
          />
          <text
            x={radio}
            y={radio}
            textAnchor='middle'
            dy='0.3em'
            fill='#74943F'
            fontSize='1.5rem'
            fontWeight='bold'
          >
            {porcentaje}
            {degrees ? 'Cº' : '%'}
          </text>
        </svg>
      </div>
      <p className=' text-green-nav text-sm p-1 font-bold'>{texto}</p>
    </div>
  );
};
