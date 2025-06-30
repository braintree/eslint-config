import type { Linter } from "eslint";
import { nodeGlobals } from "./globals";

const config: Linter.Config[] = [
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: {
        ...nodeGlobals,
      },
    },
    rules: {
      "no-path-concat": "error",
    },
  },
];

export default config;
