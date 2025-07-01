import type { Linter } from "eslint";
import globals from "globals";
import bestPracticesRules from "./rules/best-practices";
import errorsRules from "./rules/errors";
import strictRules from "./rules/strict";
import variablesRules from "./rules/variables";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

const baseTypeScriptConfig = {
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      ecmaVersion: "latest" as const,
      projectService: true,
      tsconfigRootDir: __dirname,
    },
  },
  plugins: {
    "@typescript-eslint": typescriptEslint as any,
    prettier,
  },
} as const;

const sharedRules = {
  ...bestPracticesRules.rules,
  ...errorsRules.rules,
  ...strictRules.rules,
  ...variablesRules.rules,
  ...typescriptEslint.configs.recommended.rules,
  ...prettierConfig.rules,
  "prettier/prettier": "error",
};

const config: Linter.Config[] = [
  {
    files: ["**/*.ts", "**/*.tsx"],
    ...baseTypeScriptConfig,
    rules: sharedRules as any,
  },
  // Test files configuration with relaxed rules
  {
    files: [
      "**/__mocks__/**/*.ts",
      "**/__tests__/**/*.ts",
      "**/*.test.ts",
      "**/*.spec.ts",
      "**/test/**/*.ts",
      "**/tests/**/*.ts",
    ],
    ...baseTypeScriptConfig,
    languageOptions: {
      ...baseTypeScriptConfig.languageOptions,
      globals: {
        ...globals.jest,
        ...globals.es2020,
      },
    },
    rules: {
      ...sharedRules,
      // Relax some rules for test files
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "no-unused-expressions": "off",
      "max-lines-per-function": "off",
    } as any,
  },
  // Node.js configuration and build files
  {
    files: [
      "webpack.config.js",
      "*.config.js",
      "*.config.ts",
      "webpack.config.ts",
      "vite.config.ts",
      "rollup.config.js",
      "rollup.config.ts",
      "esbuild.config.js",
      "esbuild.config.ts",
    ],
    ...baseTypeScriptConfig,
    languageOptions: {
      ...baseTypeScriptConfig.languageOptions,
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...sharedRules,
      "no-path-concat": "error",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-require-imports": "off",
      "import/no-default-export": "off",
    } as any,
  },

  // JavaScript files (for backward compatibility)
  {
    files: ["**/*.js", "**/*.jsx"],
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
      prettier,
    },
    rules: {
      ...bestPracticesRules.rules,
      ...errorsRules.rules,
      ...variablesRules.rules,
      ...prettierConfig.rules,
      "prettier/prettier": "error",
      // Disable TypeScript-specific rules for JS files
      strict: "off",
    } as any,
  },
];

export default config;
