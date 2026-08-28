// eslint-disable-next-line no-restricted-exports, import/no-default-export
export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/home',
    '/profile',
    '/historic/:path*',
    '/plant/:path*',
    '/plants/:path*',
  ],
};
