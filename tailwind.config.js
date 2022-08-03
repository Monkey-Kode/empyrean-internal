/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['fira-sans', 'sans-serif'],
    },
    extend: {
      colors: {
        darker: '#2D2D2D',
        dark: '#262626',
        darkest: '#111111',
        blue: '#0865DE',
        'light-gray': '#D1D1D1',
        'lighter-gray': '#F7F7F7',
        gray: '#707070',
        grey: '#CCCCCC',
        gray2: '#434343',
        'mid-gray': '#959595',
        'mid-gray2': '#E8E8E8',
        'med-gray': '#9D9D9D',
        'md-gray': '#747474',
        'dark-blue': '#002D69',
      },
      letterSpacing: {
        tighter: '0.225em',
        heading: '0.45rem',
      },
      lineHeight: {
        huge: '2.5',
      },
      fontFamily: {
        montserrat: ['montserrat', 'sans-serif'],
        'fira-sans': ['fira-sans', 'sans-serif'],
        'brandon-grotesque': ['brandon-grotesque', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
};
