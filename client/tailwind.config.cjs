/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        keystoneSecondaryBlue:"#A3D8F5",
        keystoneError:"#ff0033",
        monroePurple:"#6b63ff",
        failedOrange:{
          200:"#FFEDD6",
          400:"#F9A000",
        }
      },
      animation: {
        spin: 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
