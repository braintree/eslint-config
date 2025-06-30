const { default: config } = require("./dist/index.js");
const { nodeGlobals } = require("./dist/globals.js");

module.exports = [
  {
    ignores: ["dist/**"],
  },
  ...config,
  {
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      globals: {
        ...nodeGlobals,
      },
    },
  },
];
