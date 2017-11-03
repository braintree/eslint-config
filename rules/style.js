'use strict';

module.exports = {
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {allowSingleLine: true}],
    camelcase: 2,
    'comma-spacing': [2, {before: false, after: true}],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [2, 'self'],
    'eol-last': 2,
    'func-names': 0,
    'func-style': [2, 'declaration'],
    'id-length': 0,
    'id-match': 0,
    indent: [2, 2, {SwitchCase: 1}],
    'key-spacing': [2, {beforeColon: false, afterColon: true}],
    'keyword-spacing': [2],
    'lines-around-comment': 0,
    'linebreak-style': [2, 'unix'],
    'max-nested-callbacks': 0,
    'new-cap': 2,
    'new-parens': 2,
    'max-len': [2, {
      code: 140,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreUrls: true
    }],
    'newline-before-return': 2,
    'newline-after-var': [2, 'always'],
    'no-array-constructor': 2,
    'no-continue': 0,
    'no-inline-comments': 0,
    'no-lonely-if': 2,
    'no-mixed-operators': [2, {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, {max: 1}],
    'no-nested-ternary': 2,
    'no-negated-condition': 0,
    'no-new-object': 2,
    'no-restricted-syntax': 0,
    'no-spaced-func': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [2, 'never'],
    'object-property-newline': [2, {
      allowMultiplePropertiesPerLine: true
    }],
    'one-var': [2, {uninitialized: 'always', initialized: 'never'}],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'after'],
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'as-needed', {keywords: true}],
    quotes: [2, 'single', 'avoid-escape'],
    'semi-spacing': [2, {before: false, after: true}],
    semi: [2, 'always'],
    'sort-vars': 0,
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, {anonymous: 'always', named: 'never'}],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {words: true, nonwords: false}],
    'spaced-comment': [2, 'always', {
      exceptions: ['-', '+']
    }],
    'wrap-regex': 0
  }
};
