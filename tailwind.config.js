module.exports = {
  purge: ['./pages/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        kiwi: '#0e182a',
        appblue: '#0D75FF',
        coregray: '#5A5F68',
        footergrey: '#F3F5FB',
        purplegrey: '#DBE2F4',
        gray1: '#616681',
        whitegrey: '#F8FAFD',
      },
      fontSize: {
        '24px': ['1.375rem', { lineHeight: '1.75rem' }],
      },
      width: () => ({
        '300px': '300px',
        '660px': '660px',
      }),
      height: () => ({
        '600px': '600px',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
