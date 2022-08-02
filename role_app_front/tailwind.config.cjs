/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'masthead': "url('src/assets/masthead_bg.jpg')",
      }
    },
  },
  plugins: [],
}
