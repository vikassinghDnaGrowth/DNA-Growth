/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPink: 'rgb(168, 35, 100)',
        customBlue: '#091057',
        customPurple: '#800080',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #6675F7, #57007B)',  // Correct syntax
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
      }
    },
  },
  plugins: [],
}
