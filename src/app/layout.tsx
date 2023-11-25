import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import { ReactNode } from 'react';

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
