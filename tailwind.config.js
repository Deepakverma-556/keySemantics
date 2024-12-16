/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/public/assets/images/webp/hero-bg.webp')",
        heroShape: "url('/public/assets/images/webp/bg-hero-shape.webp')",
      },

      colors: {
        blue: '#191a42',
        sky: '#48c3d7',
        purple: '#7c7db9',
        darkBlue: '#111235',
        gary: '#C9CAD4',
        lightGray: '#f7f9fb',
        lightBlue:'#24254b'
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },

      screens: {
        lg: '1025px',
        md: '770px',
      }
    },
  },
  plugins: [],
}