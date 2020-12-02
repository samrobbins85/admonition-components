import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
export default {
  input: "./index.js",
  output: {
    file: "./output.js",
    format: "cjs",
  },
  external: ["react", "react-dom"],
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    resolve(),

    commonjs(),
  ],
};
