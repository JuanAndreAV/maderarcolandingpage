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
      },
      colors: {
        'azulMaderarco': '#5d78af',
        'verdeOscuroMaderarco': '#172118',
        'verdeMaderarco': '#525A35;'
      }
    }
    
    
  },
  plugins: [
    require('tailwindcss-animated'),
    require('daisyui')
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"]
  }
}

