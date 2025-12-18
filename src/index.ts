import type { Linter } from "eslint";
import globals from "globals";
import prettier from "eslint-plugin-prettier";
import imp from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";
import tseslint from "typescript-eslint";

import bestPracticesRules from "./rules/best-practices";
import errorsRules from "./rules/errors";
import strictRules from "./rules/strict";
import variablesRules from "./rules/variables";
import esModules from "./rules/es-modules";

const sharedRules = {
  ...bestPracticesRules.rules,
  ...errorsRules.rules,
  ...strictRules.rules,
  ...variablesRules.rules,
  ...prettierConfig.rules,
  ...esModules.rules,
  "prettier/prettier": "error",
};

const typeScriptConfig = tseslint.config(
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
      },
    },
    plugins: {
      imp,
      prettier,
    },
    rules: sharedRules as any,
  },
  {
    files: [
      "**/__mocks__/**/*.ts",
      "**/__tests__/**/*.ts",
      "**/*.test.ts",
      "**/*.spec.ts",
      "**/test/**/*.ts",
      "**/tests/**/*.ts",
    ],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.es2020,
      },
    },
    rules: {
      // Relax some rules for test files
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "no-unused-expressions": "off",
      "max-lines-per-function": "off",
    } as any,
  },
  {
    files: [
      "webpack.config.ts",
      "vite.config.ts",
      "rollup.config.ts",
      "esbuild.config.ts",
      "*.config.ts",
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-path-concat": "error",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-require-imports": "off",
    } as any,
  },
);

const config: Linter.Config[] = [
  ...(typeScriptConfig as Linter.Config[]),
  {
    files: [
      "webpack.config.js",
      "*.config.js",
      "rollup.config.js",
      "esbuild.config.js",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      ...bestPracticesRules.rules,
      ...errorsRules.rules,
      ...variablesRules.rules,
      ...prettierConfig.rules,
      "prettier/prettier": "error",
      "no-path-concat": "error",
      strict: "off",
    } as any,
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    ignores: ["**/__tests__/**/*.js", "**/*.spec.js", "test/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      imp,
      prettier,
    },
    rules: {
      ...bestPracticesRules.rules,
      ...errorsRules.rules,
      ...variablesRules.rules,
      ...prettierConfig.rules,
      ...esModules.rules,
      "prettier/prettier": "error",
      // Disable TypeScript-specific rules for JS files
      strict: "off",
    } as any,
  },
];

export default config;
