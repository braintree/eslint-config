import type { Linter } from "eslint";
import globals from "globals";

const config: Linter.Config[] = [
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
      },
      globals: {
        ...globals.es2015,
      },
    },
  },
];

export default config;
