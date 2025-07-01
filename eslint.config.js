const { default: config } = require("./dist/index.js");
const globals = require("globals");

module.exports = [
  {
    ignores: ["dist/**", "src/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
