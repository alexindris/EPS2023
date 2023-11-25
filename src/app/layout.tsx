import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import { ReactNode } from 'react';
import { Providers } from './providers';

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
