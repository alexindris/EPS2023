import { GET } from './route';

require('@aws-sdk/client-s3');

const mockS3GetObject = jest.fn();

// mock aws sdk
jest.mock('@aws-sdk/client-s3', () => {
  return {
    S3: jest.fn(() => ({
      GetObject: mockS3GetObject,
    })),
  };
});

describe('GET endpoint', () => {
  beforeEach(() => {
    mockS3GetObject.mockReset();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return all files', async () => {
    mockS3GetObject.mockImplementation((params, callback) => {
      callback(null, { Body: 'test document' });
    });

    const response = await GET();
    expect(response.status).toBe(200);
  });
});
