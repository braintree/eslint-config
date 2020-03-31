# CHANGELOG

## unreleased

_Breaking Changes_

- Add jest config to `__tests__` directories automatically
- `object-curly-spacing` changed from `[2, 'never']` to `[2, 'always']`
- Require eslint@^6.8.0
- Use prettier for style rules

## 4.0.0

_Breaking Changes_

- Update peer dependencies to require eslint@6

## 3.0.1

- Readme updates

## 3.0.0

_Breaking Changes_

- Update peer dependencies to require eslint@5

## 2.0.0

- Requires eslint@4
- Add additional rules
  - `max-len`
  - `newline-before-return`
  - `no-mixed-operators`
  - `no-whitespace-before-property`
  - `object-property-newline`
  - `spaced-comment`
  - `no-path-concat` in `server.js`
- Update existing rules
  - `ignoreEOLComments: true` for `no-multi-spaces`
  - `nestedBinaryExpressions: false` for `no-extra-parens`
