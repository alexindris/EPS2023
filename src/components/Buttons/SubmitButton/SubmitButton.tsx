import { SubmitButtonProps } from './types';

export const SubmitButton = ({
  text,
  children,
  className = 'rounded-full text-white text-xl bg-orange-btn p-5',
}: SubmitButtonProps) => {
  return (
    <button className={className} type='submit'>
      <div className='flex items-center'>
        {text}
        {children}
      </div>
    </button>
  );
};
