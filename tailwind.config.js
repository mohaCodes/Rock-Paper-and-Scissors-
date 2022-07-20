/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {

    //adding Poppins font as a custom font
    fontFamily: {
      'poppins': 'Poppins, sans-serif'
    },


    // Adding custom colors
    colors: {
      'onPrimary': '#000000',
      'onPrimaryLight': '#1F1F1F'
    },


    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
