/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ark: {
          red: '#D93025', 
          dark: '#0F0F0F',
          charcoal: '#1E1E1E',
          light: '#F3F4F6',
          grey: '#9CA3AF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}