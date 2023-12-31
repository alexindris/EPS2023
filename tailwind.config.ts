/* eslint-disable import/no-default-export */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'green-nav': '#74943F',
        'green-bg': '#ABB441',
        'orange-btn': '#DD6B20',
        'light-green-slide': '#D6E7BA',
        pop: '#ECF4DF',
        'text-input': '#4C6425',
      },
    },
  },
  plugins: [],
};
export default config;
