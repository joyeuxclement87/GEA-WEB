/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#caa04d',
        dark: '#1a1a1a',
      },
      borderRadius: {
        'architectural': '0px',
        'slight': '2px',
      }
    },
  },
  plugins: [],
}
