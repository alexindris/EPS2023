import { SampleProps } from './types';

export const Sample = ({ age, name }: SampleProps) => (
  <div>
    Sample {name} : {age}
  </div>
);
