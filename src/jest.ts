import type { Linter } from "eslint";
import globals from "globals";

const config: Linter.Config[] = [
  {
    files: [
      "**/__tests__/**/*.ts",
      "**/__tests__/**/*.js",
      "**/*.test.ts",
      "**/*.test.js",
      "**/*.spec.ts",
      "**/*.spec.js",
      "test/**/*.ts",
      "test/**/*.js",
      "**/__mocks__/**/*.ts",
      "**/__mocks__/**/*.js",
      "__mocks__/**/*.ts",
      "__mocks__/**/*.js",
    ],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      globals: {
        ...globals.jest,
        ...globals.es2020,
      },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-var-requires": "off",
    } as any,
  },
];

export default config;
