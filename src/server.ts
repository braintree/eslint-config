import type { Linter } from "eslint";
import globals from "globals";
import baseConfig from "./index";

const config: Linter.Config[] = [
  ...baseConfig,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-path-concat": "error",
    },
  },
];

export default config;
