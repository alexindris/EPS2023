/**
 * @jest-environment node
 */

import {
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
} from '@/exceptions';
import { errorHandler } from '../../lib/errorHandler';

describe('errorHandler', () => {
  it('should handle NotFoundException', async () => {
    const error = new NotFoundException('Resource not found');
    const response = errorHandler(error);

    const responseBody = await response.json();

    expect(response.status).toBe(404);
    expect(responseBody).toBe(error.message);
  });

  it('should handle BadRequestException', async () => {
    const error = new BadRequestException('Invalid request');
    const response = errorHandler(error);

    const responseBody = await response.json();

    expect(response.status).toBe(400);
    expect(responseBody).toBe(error.message);
  });

  it('should handle UnauthorizedException', async () => {
    const error = new UnauthorizedException('Unauthorized');
    const response = errorHandler(error);

    const responseBody = await response.json();

    expect(response.status).toBe(401);
    expect(responseBody).toBe(error.message);
  });

  it('should handle other exceptions in development environment', async () => {
    const error = new Error('Internal error');
    const response = errorHandler(error);

    const responseBody = await response.json();

    expect(response.status).toBe(500);
    expect(responseBody).toBe(error.message);
  });
});
