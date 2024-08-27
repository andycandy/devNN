/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { fontFamily: {
    'Khyay': ['Khyay', 'sans-serif'],
    'ABeeZee' : [ "ABeeZee", 'sans-serif'],
    'SourceSans' : ["Source Sans 3", "sans-serif"]
  },
    extend: {},
  },
  plugins: [],
}