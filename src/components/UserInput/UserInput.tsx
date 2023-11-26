import { useFormContext } from 'react-hook-form';
import { UserInputProps } from './types';

export const UserInput = ({
  textInput,
  name,
  type = 'text',
}: UserInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className='ml-2 mr-10 items-center text-center flex my-5'>
      <div className='w-1/3 text-text-input font-bold text-lg'>
        <p>{textInput}</p>
      </div>
      <div className='w-2/3'>
        <input
          className='w-full mx-4 px-4 text-lg'
          {...register(name)}
          type={type}
        />
        {errors[name] && (
          <span key={name} className='text-red-500 font-bold'>
            {errors[name]?.message as string}
          </span>
        )}
      </div>
    </div>
  );
};
