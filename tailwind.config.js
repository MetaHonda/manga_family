/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'comic-bg': '#fdfbf7', // Warm paper-like background
        'comic-text': '#2d3748', // Soft dark text
        'comic-accent': '#ed8936', // Orange accent
      },
      fontFamily: {
        'comic': ['"Zen Maru Gothic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
