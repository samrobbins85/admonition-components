import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import react from "react";
import reactDom from "react-dom";
export default {
  input: "./index.js",
  output: {
    file: "./output.js",
    format: "cjs",
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    resolve(),

    commonjs({
      include: "node_modules/**",
      namedExports: {
        react: Object.keys(react),
        "react-dom": Object.keys(reactDom),
      },
    }),
  ],
};
