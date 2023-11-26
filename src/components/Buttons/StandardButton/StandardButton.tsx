import { SubmitButtonProps } from './types';

export const StandardButton = ({
  text,
  children,
  className = 'rounded-full text-white text-xl bg-orange-btn p-5',
  onclick,
}: SubmitButtonProps) => {
  return (
    <button className={className} type='button' onClick={onclick}>
      <div className='flex items-center'>
        {text}
        {children}
      </div>
    </button>
  );
};
