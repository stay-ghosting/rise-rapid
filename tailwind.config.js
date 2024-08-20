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
        "cta": "#1A63C1",
        "cta-hover": "#006FFF",
        "primary": "#1A63C1",
        "card": "#202020"
      }
    },
  },
  plugins: [],
}

