/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1DB954',
          dark: '#1aa34a',
        },
        background: {
          DEFAULT: '#121212',
          elevated: '#282828',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B3B3B3',
        }
      }
    },
  },
  plugins: [],
}