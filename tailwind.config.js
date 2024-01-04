/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lateef : "'Lateef', serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

