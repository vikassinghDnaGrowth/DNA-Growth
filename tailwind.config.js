/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#091057',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #6675F7, #57007B)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
        arimo: ['Arimo', 'ital'],
      },
      animation: {
        scaleUp: 'scaleUp 1s ease forwards',
        fadeInUp: 'fadeInUp 1s ease forwards',
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(-80px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        marquee: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
    },
  },
  plugins: [],
};
