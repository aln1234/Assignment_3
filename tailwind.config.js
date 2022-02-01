const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
     
        "mont": ["Montserrat"],
        
      },
      backgroundImage: {

        'top': "url('/images/bg.svg')",
      }
    },
  },
  plugins: [],
}
