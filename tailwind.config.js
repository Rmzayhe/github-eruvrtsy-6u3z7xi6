/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6e6f0',
          100: '#cdcee1',
          200: '#9a9dc3',
          300: '#686ca5',
          400: '#353b87',
          500: '#031a69', // navy blue from logo
          600: '#021558',
          700: '#021047',
          800: '#010a36',
          900: '#010525',
        },
        secondary: {
          50: '#fde8e8',
          100: '#fbd0d0',
          200: '#f7a1a1',
          300: '#f37373',
          400: '#ef4444',
          500: '#eb1515', // red from logo
          600: '#bc1111',
          700: '#8d0d0d',
          800: '#5e0808',
          900: '#2f0404',
        },
        accent: {
          50: '#fef8e7',
          100: '#fdf1cf',
          200: '#fbe39f',
          300: '#f9d56f',
          400: '#f7c73f',
          500: '#f5b910', // gold from logo
          600: '#c4940d',
          700: '#936f0a',
          800: '#624a06',
          900: '#312503',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};