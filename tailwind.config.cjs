/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./public/bgHero.jpg')",
        'about-pattern': "url('./public/stripes.jpg')",
      },
    },
  },
  plugins: [],
};
