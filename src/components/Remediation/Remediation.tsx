import { RemediationProps } from './types';

export const Remediation = ({ texto, number }: RemediationProps) => {
  return (
    <div className='justify-center rounded-lg bg-pop px-4 pb-4 max-w-xl mb-10'>
      <p className=' relative inline-block text-white text-sm p-2 font-bold rounded-xl bg-green-800 shadow-md -top-5 left-0'>
        Consejo {number}
      </p>
      <p className=' text-green-nav text-sm p-1 font-bold'>{texto}</p>
    </div>
  );
};
