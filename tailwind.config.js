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
        scaleUp: 'scaleUp 2s linear forwards ',
        fadeInUp: 'fadeInUp 2s linear forwards',
        scaleUp2: 'scaleUp 2s linear forwards',
      },
      keyframes: {
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateX(-30vw)',},
          '100%': { opacity: '1', transform: 'translateX(0px)' },
        },
        scaleUp2: {
          '0%': {
           opacity: '0.25',scale: '0',
          },
          '100%': {
           opacity: '1',scale: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
