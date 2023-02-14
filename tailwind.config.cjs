/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--dmsans-font)", "sans-serif"],
      },
      colors: {
        midnight: "#161616",
      },
    },
  },
  plugins: [],
};
