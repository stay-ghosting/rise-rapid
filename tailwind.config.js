/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   'sm': "514px",
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   '2xl': '1536px',
    // },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        "cta": "#1A63C1",
        "cta-hover": "#006FFF",
        "primary": "#1A63C1",
        "card": "#202020",
        "shaddow": "#121212"
      },
    },
  },
  plugins: [],
}

