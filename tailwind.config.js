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
      },
      boxShadow: {
        'auth-top': '0px 2px 4px rgba(0, 0, 0, 0.09)',
      },
    },
  },
  plugins: [],
};
