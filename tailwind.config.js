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
      'black-blur': 'rgba(23,32,46,0.5)',
      'heavy-orange': '#df7100',
      'blue-for-text': '#000080',
      'transparent':'transparent',
      'black':'#252a30',
      'green':'#0bb806',
      'red':'#eb0202'
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
