module.exports = {
  mode: 'jit',
  content: ['storyblok/**/*.{vue,js}', 'pages/**/*.vue'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '46px',
        },
      },
      colors: {
        'nfr-beige': '#FFF1E5',
        'nfr-green' : '#00E676',
        'nfr-green' : {
          DEFAULT: '#00E676',
          light: '#4AEB9D',
        },
      },
      fontFamily: {
        poppins : [
          'Poppins', 
          'sans-serif',
        ],
      },
      fontSize: {
        '8': '8px',
        '14': '14px',
        '12': '12px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '30': '30px',
        '36': '36px',
        '40': '40px',
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}