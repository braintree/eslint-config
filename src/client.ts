import type { Linter } from "eslint";
import { browserGlobals, commonjsGlobals, disabledGlobals } from "./globals";
import baseConfig from "./index";

const config: Linter.Config[] = [
  ...baseConfig,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: {
        ...browserGlobals,
        ...commonjsGlobals,
        ...disabledGlobals,
      },
    },
  },
];

export default config;
