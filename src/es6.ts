import type { Linter } from "eslint";
import { es6Globals } from "./globals";

const config: Linter.Config[] = [
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
      },
      globals: {
        ...es6Globals,
      },
    },
  },
];

export default config;
