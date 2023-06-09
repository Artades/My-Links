/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        scaleIn: {
          '0%':{
            opacity: 0,
            transform: 'scale(0.9)',
          },
          '50%':{
            opacity: 0.3
          },
          '100%':{
             opacity: 1,
            transform: 'scale(1)',
          }
        }
      },
      animation: {
        scaleIn: 'scaleIn 0.35s ease-in-out'
      }
    },
  },
  plugins: [],
}