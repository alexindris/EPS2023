import { checkSentFile, getFormatedFileProps, isException } from '@/lib/helper'; // Adjust the import path as needed

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

describe('getFormatedFileProps', () => {
  it('should return the file name and content', async () => {
    const fileName = 'testFile.txt';
    const fileContent = 'This is a test file.';

    const mockFile = new File([fileContent], fileName);

    const result = await getFormatedFileProps(mockFile);
    expect(result.fileName).toBe(fileName);
    expect(result.fileContent).toStrictEqual(Buffer.from(fileContent));
  });
});

describe('checkSentFile', () => {
  it('should throw an error if the file is not found', () => {
    const file = null;
    expect(() => checkSentFile(file, ['text/plain'], 1)).toThrow(
      'File not found',
    );
  });

  it('should throw an error if the file type is not supported', () => {
    const file = new File(['test'], 'testFile.txt', { type: 'image/png' });
    expect(() => checkSentFile(file, ['text/plain'], 1)).toThrow(
      'File type is not supported',
    );
  });

  it('should throw an error if the file size is too big', () => {
    const file = new File(['test'], 'testFile.txt', { type: 'text/plain' });
    Object.defineProperties(file, {
      size: {
        value: 1000000,
      },
    });
    expect(
      () =>
        // eslint-disable-next-line implicit-arrow-linebreak
        checkSentFile(file, ['text/plain'], 0.001),
      // eslint-disable-next-line function-paren-newline
    ).toThrow('File size is too big');
  });
});
