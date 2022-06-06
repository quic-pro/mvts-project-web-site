module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {

    },
    colors: {
      'mainBlack': '#181B20', //color all area
      'gradientBlack': '#1A2431', //color for bottom's gradient
      'bigText': '#378eff', //color big text
      'botText': '#48668d', //color bottom text
    },
    fontSize: {
      'xxs': '.55rem', //size of bottom text
      '5xl': '3rem', //size of big text
    },
    fontFamily:{
      'Comfort': ['Comfortaa', 'sans-serif'],
      'Montserr': ['Montserrat', 'sans-serif'],
    },
    screens:{
      'ph': {'min': '350px', 'max': '800px'},
    },
  plugins: [],
  }
}
