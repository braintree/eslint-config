const { default: config } = require("./dist/index.js");
const { nodeGlobals } = require("./dist/globals.js");

module.exports = [
  {
    ignores: ["dist/**", "src/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...nodeGlobals,
      },
    },
  },
];
