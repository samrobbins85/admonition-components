const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./components/**/*.js", "./stories/**/*.*", "./.storybook/*.js"],
  darkMode: false,

  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        orange: colors.orange,
        green: colors.green,
      },
      maxWidth: {
        ch64: "64ch",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
