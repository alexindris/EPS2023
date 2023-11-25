import '@/styles/globals.css';
import { ReactNode } from 'react';
import { NavBar } from '@/components/NavBar';
import { montserrat } from '@/lib/fonts';
import { Providers } from './providers';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${montserrat.className} bg-green-bg `}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
