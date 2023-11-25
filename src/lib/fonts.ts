// eslint-disable-next-line camelcase
import { Croissant_One, Montserrat } from 'next/font/google';

export const croissant = Croissant_One({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
