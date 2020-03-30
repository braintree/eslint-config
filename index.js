'use strict';

module.exports = {
  'extends': [
    './rules/best-practices',
    './rules/errors',
    './rules/strict',
    './rules/style',
    './rules/variables'
  ].map(require.resolve),
  rules: { },
  excludeFiles: [
    'dist/*'
  ],
  overrides: [{
    files: ['**/__tests__/**/*.js'],
    'extends': './jest'
  }]
};
