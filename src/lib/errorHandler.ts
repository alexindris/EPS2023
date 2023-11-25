import {
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
} from '@/exceptions';
import { NODE_ENV } from './env';
import { isException } from './helper';
import { logger } from './logger';

export function errorHandler(error: unknown) {
  isException(error);

  logger.error(`${error.name}: ${error.message}`);

  const body = JSON.stringify(error.message);
  switch (true) {
    case error instanceof NotFoundException:
      return new Response(body, { status: 404 });
    case error instanceof BadRequestException:
      return new Response(body, { status: 400 });
    case error instanceof UnauthorizedException:
      return new Response(body, { status: 401 });
    default:
      logger.error('Unexpected error: ', error);

      /* istanbul ignore next */
      if (NODE_ENV === 'production') {
        const productionBody = JSON.stringify('Internal Server Error');
        return new Response(productionBody, { status: 500 });
      }

      return new Response(body, { status: 500 });
  }
}
