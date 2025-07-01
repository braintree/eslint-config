import type { Linter } from "eslint";
import globals from "globals";
import baseConfig from "./index";

const config: Linter.Config[] = [
  ...baseConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        global: "off",
        debugger: "off",
      },
    },
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        global: "off",
        debugger: "off",
      },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-this-alias": "off",
      // Some of these may actually be good to turn back on, but we violate a lot of them right now.
      "no-prototype-builtins": "off",
      "prefer-promise-reject-errors": "off",
      "no-empty-function": "off",
      "no-param-reassign": "off",
    } as any,
  },
];

export default config;
