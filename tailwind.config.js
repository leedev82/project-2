/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'marquee': 'marquee var(--duration, 40s) linear infinite',
        'marquee-reverse': 'marquee var(--duration, 40s) linear infinite reverse'
      }
    },
  },
  plugins: [],
};
