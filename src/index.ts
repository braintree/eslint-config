export = {
  extends: [
    "./rules/best-practices",
    "./rules/errors",
    "./rules/strict",
    "./rules/variables",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {},
  overrides: [
    {
      files: [
        "**/__mocks__/**/*.ts",
        "**/__tests__/**/*.ts"
      ],
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
