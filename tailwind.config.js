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
        dark: '#262626',
        darkest: '#111111',
        blue: '#0865DE',
        'light-gray': '#D1D1D1',
        'lighter-gray': '#F7F7F7',
        gray: '#707070',
        'mid-gray': '#959595',
        'dark-blue': '#002D69',
      },
      letterSpacing: {
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
    },
  },
  plugins: [],
};
