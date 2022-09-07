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
        '8': ['8px', { lineHeight: '15px' }],
        '12': ['12px', { lineHeight: '22px' }],
        '14': ['14px'],
        '20': ['20px', { lineHeight: '30px' }],
        '24': ['24px', { lineHeight: '45px' }],
        '28': ['28px', { lineHeight: '53px' }],
        '30': ['30px'],
        '36': ['36px', { lineHeight: '105px' }],
        '40': ['40px', { lineHeight: '105px' }],
      },
    }
  }
}