import { UserInputProps } from './types';

export const UserInput = ({ textInput }: UserInputProps) => {
  return (
    <div className='ml-2 mr-10 items-center text-center flex my-5'>
      <div className='w-1/3 text-text-input font-bold text-lg'>
        <p>{textInput}</p>
      </div>
      <div className='w-2/3'>
        <input className='w-full mx-4 px-4 text-lg'></input>
      </div>
    </div>
  );
};
