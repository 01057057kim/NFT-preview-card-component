/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors :{
        's-blue' : 'hsl(215, 51%, 70%)',
        'cyan' : 'hsl(178, 100%, 50%)',
        'm-v-d-blue' : 'hsl(217, 54%, 11%)',
        'c-v-d-blue' : 'hsl(216, 50%, 16%)',
        'l-v-d-blue' : 'hsl(215, 32%, 27%)',
      },
      fontFamily:{
        'outfit' : 'Outfit , sans-serif'
      }
    },
  },
  plugins: [],
}

