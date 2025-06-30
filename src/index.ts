import type { Linter } from "eslint";
import { nodeGlobals, jestGlobals, es2020Globals } from "./globals";
import bestPracticesRules from "./rules/best-practices";
import errorsRules from "./rules/errors";
import strictRules from "./rules/strict";
import variablesRules from "./rules/variables";

const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const prettier = require("eslint-plugin-prettier");
const prettierConfig = require("eslint-config-prettier");

const config: Linter.Config[] = [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      prettier: prettier,
    },
    rules: {
      ...bestPracticesRules.rules,
      ...errorsRules.rules,
      ...strictRules.rules,
      ...variablesRules.rules,
      ...typescriptEslint.configs.recommended.rules,
      ...prettierConfig.rules,
      "prettier/prettier": "error",
    },
  },
  {
    files: ["**/__mocks__/**/*.ts", "**/__tests__/**/*.ts"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      globals: {
        ...jestGlobals,
        ...es2020Globals,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      prettier: prettier,
    },
    rules: {
      ...bestPracticesRules.rules,
      ...errorsRules.rules,
      ...strictRules.rules,
      ...variablesRules.rules,
      ...typescriptEslint.configs.recommended.rules,
      ...prettierConfig.rules,
      "prettier/prettier": "error",
    },
  },
  {
    files: ["webpack.config.js"],
    languageOptions: {
      parser: typescriptParser,
      globals: {
        ...nodeGlobals,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      prettier: prettier,
    },
    rules: {
      ...bestPracticesRules.rules,
      ...errorsRules.rules,
      ...strictRules.rules,
      ...variablesRules.rules,
      "no-path-concat": "error",
      ...typescriptEslint.configs.recommended.rules,
      ...prettierConfig.rules,
      "prettier/prettier": "error",
      "@typescript-eslint/no-var-requires": "off",
    },
  },
];

export default config;
