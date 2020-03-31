export = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/strict',
    './rules/variables',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {},
  overrides: [
    {
      files: ['**/__tests__/**/*.ts'],
      extends: './jest'
    },
    {
      files: ['webpack.config.js'],
      extends: './node'
    }
  ]
};
