import { getServerSession } from 'next-auth';
import { UnauthorizedException } from '@/exceptions';
import { requireUserId } from './session';

jest.mock('next-auth', () => ({
  getServerSession: jest.fn(),
}));

jest.mock('./auth', () => ({
  authOptions: {},
}));

const mockGetServerSession = getServerSession as jest.MockedFunction<
  typeof getServerSession
>;

describe('requireUserId', () => {
  beforeEach(() => {
    mockGetServerSession.mockReset();
  });

  it('returns the authenticated user id', async () => {
    mockGetServerSession.mockResolvedValue({
      user: { id: 'user-a' },
      expires: '2099-01-01T00:00:00.000Z',
    });

    await expect(requireUserId()).resolves.toBe('user-a');
  });

  it('rejects a request without an authenticated user', async () => {
    mockGetServerSession.mockResolvedValue(null);

    await expect(requireUserId()).rejects.toBeInstanceOf(UnauthorizedException);
  });
});
