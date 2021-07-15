const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extends: {
      colors: {
        baseColor: colors.purple,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
