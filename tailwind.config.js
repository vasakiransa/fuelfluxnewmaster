/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "graphik-medium": ['"Graphik Trial-Medium"', "sans-serif"],
        "graphik-regular": ['"Graphik Trial-Regular"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
