/** @jest-environment node */

import { UnauthorizedException } from '@/exceptions';
import { requireUserId } from '@/lib/session';
import { getHistory, getPlantById } from '@/repositories/plants';
import { GET } from './route';

jest.mock('@/lib/session', () => ({
  requireUserId: jest.fn(),
}));

jest.mock('@/repositories/plants', () => ({
  getHistory: jest.fn(),
  getPlantById: jest.fn(),
}));

const mockRequireUserId = requireUserId as jest.MockedFunction<
  typeof requireUserId
>;
const mockGetPlantById = getPlantById as jest.MockedFunction<
  typeof getPlantById
>;
const mockGetHistory = getHistory as jest.MockedFunction<typeof getHistory>;

const request = new Request('http://localhost/api/plants/plant-a/historic');
const context = { params: { id: 'plant-a' } };

describe('plant history route', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('returns 401 without querying plants when the user is unauthenticated', async () => {
    mockRequireUserId.mockRejectedValue(
      new UnauthorizedException('Authentication required'),
    );

    const response = await GET(request, context);

    expect(response.status).toBe(401);
    expect(mockGetPlantById).not.toHaveBeenCalled();
    expect(mockGetHistory).not.toHaveBeenCalled();
  });

  it('returns 404 without querying history when the plant is not owned', async () => {
    mockRequireUserId.mockResolvedValue('user-a');
    mockGetPlantById.mockResolvedValue(null);

    const response = await GET(request, context);

    expect(response.status).toBe(404);
    expect(mockGetPlantById).toHaveBeenCalledWith('plant-a', 'user-a');
    expect(mockGetHistory).not.toHaveBeenCalled();
  });

  it('returns only history scoped to the authenticated owner', async () => {
    mockRequireUserId.mockResolvedValue('user-a');
    mockGetPlantById.mockResolvedValue({ id: 'plant-a' } as never);
    mockGetHistory.mockResolvedValue([]);

    const response = await GET(request, context);

    expect(response.status).toBe(200);
    expect(mockGetHistory).toHaveBeenCalledWith('plant-a', 'user-a', 7);
    await expect(response.json()).resolves.toEqual({ plant: [] });
  });
});
