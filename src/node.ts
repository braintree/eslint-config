import type { Linter } from "eslint";
import globals from "globals";

const config: Linter.Config[] = [
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
