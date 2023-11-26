/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'poppins': 'Poppins',
        'montserrat': 'Montserrat'
      },
      keyframes: {
        pop: {
          '0%': {opacity: '0' },
          '100%': {opacity: '1'  },
        },
      },
      animation: {
        'pop': 'pop 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}

