export = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "./rules/best-practices",
    "./rules/errors",
    "./rules/strict",
    "./rules/variables",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {},
  overrides: [
    {
      files: ["**/__mocks__/**/*.ts", "**/__tests__/**/*.ts"],
      extends: "./jest",
    },
    {
      files: ["webpack.config.js"],
      extends: "./node",
      rules: {
        "@typescript-eslint/no-var-requires": 0,
      },
    },
  ],
};
