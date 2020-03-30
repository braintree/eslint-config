
export = {
  'extends': [
    './rules/best-practices',
    './rules/errors',
    './rules/strict',
    './rules/style',
    './rules/variables',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: { },
  overrides: [{
    files: ['**/__tests__/**/*.ts'],
    'extends': './jest'
  }]
};
