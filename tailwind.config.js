/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100%))' }
        }
      },
      animation: {
        'scroll': 'scroll 25s linear infinite',
        'scroll-reverse': 'scroll 25s linear infinite reverse'
      }
    },
  },
  plugins: [],
};
