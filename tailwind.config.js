/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './modules/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat-regular': ['Montserrat-Regular', 'sans-serif'],
        'montserrat-bold': ['Montserrat-Bold', 'sans-serif'],
        'montserrat-semibold': ['Montserrat-SemiBold', 'sans-serif'],
      },
      colors: {
        textColor: '#4B4B4B',
        primary: '#FF5757',
        backgroundInput: '#24292E',
      },
      boxShadow: {
        'auth-top': '0px 2px 4px rgba(0, 0, 0, 0.09)',
      },
      height: {
        '1/12': '8.33333333333333%',
        '2/12': '16.66666666666667%',
        '3/12': '25%',
        '4/12': '33.33333333333333%',
        '5/12': '41.66666666666667%',
        '6/12': '50%',
        '7/12': '58.33333333333333%',
        '8/12': '66.66666666666667%',
        '9/12': '75%',
        '10/12': '83.33333333333333%',
        '11/12': '91.66666666666667%',
      },
    },
  },
  plugins: [],
};
