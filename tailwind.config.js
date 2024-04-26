/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    animation: {
      wiggle: 'slidein 1s ease-in-out',
    },
    keyframes: {
      slidein: {
        '0%': { top: -500},
        '100%': { top: 0 },
      }
    },
    colors:{
      white: '#ffffff',
      green: '#E2F1BA',
      cyan: '#08D4AF',
      cyan100: '#33BEBC',
      cyan200: '#39c6f3',
      cyan300: '#bcecfb',
      cyan400: '#BED8EB',
      cyan500: '#b0e0e6',
      cyan600: '#678585',
      blue: '#023B99',
      blue200: '#003399',
      blue300: '#199BE2',
      blue400: '#3abaff',
      blue800: '#c8e8f9',
      black: '#000000',
      black600: '#444444',
      gray: '#dddddd',
      gray100: '#f5f5f5',
      gray200: '#eeeeee'
    }
  },
  plugins: [],
}