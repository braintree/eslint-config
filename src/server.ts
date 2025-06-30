import type { Linter } from "eslint";
import { nodeGlobals } from "./globals";
import baseConfig from "./index";

const config: Linter.Config[] = [
  ...baseConfig,
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
