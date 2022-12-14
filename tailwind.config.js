module.exports = {
  mode: 'jit',
  content: ['storyblok/**/*.{vue,js}', 'pages/**/*.vue'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '46px',
          xl: '7rem',
          '2xl': '8rem',
        },
      },
      colors: {
        'nfr-beige': '#FFF1E5',
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
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '22': '22px',
        '24': '24px',
        '26': '26px',
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