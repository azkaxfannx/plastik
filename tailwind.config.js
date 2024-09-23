/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        write: ["Shadows Into Light Two", "cursive"]
      },
    },
  },
  plugins: [
    require('daisyui')
  ],

  daisyui: {
    themes: ["retro"]
  }
}