/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-bg": "#ececec",
        black: "#202327",
        "grey-500": "#c1c6c9",
      },
      fontFamily: {
        display: ["Red Hat Display", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
