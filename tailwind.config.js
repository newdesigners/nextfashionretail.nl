module.exports = {
  mode: 'jit',
  content: ['storyblok/**/*.{vue,js}', 'pages/**/*.vue'],
  theme: {
    extend: {
      color: {

      },
      fontFamily: {
        poppins : [
          'Poppins', 
          'sans-serif',
        ],
      }
    }
  }
}