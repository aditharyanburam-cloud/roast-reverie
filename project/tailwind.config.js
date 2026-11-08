/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FCFAF6',
          100: '#F7F1E7',
          200: '#EFE5D4',
        },
        beige: {
          100: '#EFE3D0',
          200: '#E2CFB4',
          300: '#CDB594',
        },
        espresso: {
          500: '#6B5242',
          700: '#3A2719',
          800: '#2B1C12',
          900: '#1F140D',
        },
        terracotta: {
          300: '#DB9A80',
          500: '#B86B4E',
          600: '#9C5439',
          700: '#83452C',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 1s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        'fade-in': 'fadeIn 0.3s ease-out both',
      },
    },
  },
  plugins: [],
};
