// eslint-disable-next-line no-restricted-exports, import/no-default-export
export { default } from 'next-auth/middleware';

export const config = {
  // Indicate the urls that require authentication
  matcher: ['/home'],
};
