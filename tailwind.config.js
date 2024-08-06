/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        "cta": "#0096C7",
        "primary": "#1A63C1",
        "bg-nav": "#252422",
        "bg-dark": "#1A1917",
        "dark-card": "#202020",
        "bg-dark-form": "#494949",
        "title": "#252422",
        "p": "#3F3D39",
        "bg-card": "#202020"
      }
    },
  },
  plugins: [],
}

