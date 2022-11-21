const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'identityBlue': '#2F80ED',
        'primaryDark': '#333333',
        'primaryGray': '#A5A5A5',
        'secondaryGray': '#D4D4D4',
        'tertiaryGray': '#F3F3F3',
      },
      spacing: {
        '10p': '10%',
        '15p': '15.28%',
      },
      fontFamily: {
        'sans': ['"Work Sans"', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}