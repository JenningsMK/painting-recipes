const defaultTheme = require('tailwindcss/defaultTheme')

/**
 * @type {import('tailwindcss').Config}
 * @see https://tailwindcss.com/docs/configuration
 */
module.exports = {
  content: ['./pages/*.vue'],
  theme: {
    colors: {
      light: {
        primary: 'hsla(281 64% 31% / 1)',
        text: 'hsla(210 40% 98% / 1)',
      },
      dark: {
        primary: 'hsla(281 75% 14% / 1)',
        text: 'hsla(217 33% 17% / 1)',
        background: 'hsla(270 72% 7% / 1)',
      },
      overlay: 'rgba(126 127 130 / 0.4)',
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito', ...defaultTheme.fontFamily.serif],
        sig: ['Signika Negative', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        '4x1': ['2.5rem', '1.5'],
      },
    },
  },
  plugins: [],
}
