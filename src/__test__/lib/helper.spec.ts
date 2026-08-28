import { isException } from '@/lib/helper';

describe('isException', () => {
  it('should not throw an error if the input is an instance of Error', () => {
    const error = new Error('Test error');
    expect(() => isException(error)).not.toThrow();
  });

  it('should throw an error if the input is not an instance of Error', () => {
    const nonError = 'This is not an error';
    expect(() => isException(nonError)).toThrow();
  });
});
