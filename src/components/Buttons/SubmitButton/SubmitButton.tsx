import { SubmitButtonProps } from './types';

export const SubmitButton = ({ text, children }: SubmitButtonProps) => {
  return (
    <button
      className='rounded-full text-white text-xl bg-orange-btn p-5'
      type='submit'
    >
      <div className='flex items-center'>
        {text}
        {children}
      </div>
    </button>
  );
};
