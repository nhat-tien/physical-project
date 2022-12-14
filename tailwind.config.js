/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'blue': '#1e40af',
      'pink':'rgba(245, 40, 79, 0.25)',
      'yellow': '#ecd872',
      'orange': '#ffb338',
      'heavy-blue': '#333353',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    extend: {
      spacing: {
        nav: '60px'
      },
      backgroundImage: {
      },
      screens: {
        'sm': '577px',
        'ltsm': {'max' : '576px'}
      }
    },
  },
  plugins: [],
}
