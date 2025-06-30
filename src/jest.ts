import type { Linter } from "eslint";
import { jestGlobals, es2020Globals } from "./globals";

const config: Linter.Config[] = [
  {
    files: [
      "**/__tests__/**/*.ts",
      "**/__tests__/**/*.js",
      "**/*.test.ts",
      "**/*.test.js",
      "**/*.spec.ts",
      "**/*.spec.js",
    ],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      globals: {
        ...jestGlobals,
        ...es2020Globals,
      },
    },
  },
];

export default config;
