/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily:{
        maderarcoFont:["Dancing Script", "cursive"

        ]
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

