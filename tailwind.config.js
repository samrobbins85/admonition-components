const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./components/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        orange: colors.orange,
        green: colors.green,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
