const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'projectPurple': '#C3A8F7',
        'projectOrange': '#FF902A',
        'projectWhite': '#EEF2F5',
        'projectRed': '#DF0000',
        'projectBlue': '#39D6D7',
        'customGrey': '#1C1C1C',
      },
      spacing: {
        '10p': '10%',
        '15p': '15.28%',
      },
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}