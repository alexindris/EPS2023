import prisma from '@/lib/prisma';
import { getHistory } from './plants';

jest.mock('@/lib/prisma', () => ({
  __esModule: true,
  default: {
    plantHistory: {
      groupBy: jest.fn(),
    },
  },
}));

describe('getHistory', () => {
  it('scopes telemetry by both plant and owner', async () => {
    const mockGroupBy = prisma.plantHistory.groupBy as jest.Mock;
    mockGroupBy.mockResolvedValue([]);

    await getHistory('plant-a', 'user-a', 7);

    expect(mockGroupBy).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          plantId: 'plant-a',
          plant: { userId: 'user-a' },
        }),
      }),
    );
  });
});
