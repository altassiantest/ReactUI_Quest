import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#7BB274',
          secondary: '#E8A33D',
          danger: '#E8A33D',
          headerBg: '#6C6E70',
          sectionBg: '#F5F5F5',
          readOnly: '#EAEEF1',
          border: '#D9D9D9',
          tableBorder: '#E0E0E0',
          textPrimary: '#333333',
          textSecondary: '#555555',
        },
      },
      borderRadius: {
        card: '4px',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
