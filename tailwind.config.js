/** @type {import('tailwindcss').Config} */
import daisyui from './node_modules/daisyui'
module.exports = {
  content: [ "./src/**/*.{html,jsx}",
  './components/**/*.{html,js}',],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}

