/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",             // main HTML
    "./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

