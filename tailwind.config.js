/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textUnderlineOffset: {
        '5': '13px',
        'meow': 'color-red'
      },
      colors: {
        'custom-black': '#243c5a',
        'custom-blue': '#2a293e'
      },
    },
  },
  plugins: [],
}
