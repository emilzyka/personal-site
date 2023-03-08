/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    screens: {
      smm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/img/bgHero.jpg')",
        'about-pattern': "url('./src/img/stripes.jpg')",
      },
    },
  },
  plugins: [],
};
