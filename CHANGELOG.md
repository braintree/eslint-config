# CHANGELOG

## 5.0.1

- Update (sub-)dependencies
  - `cross-spawn` to 7.0.6
  - `semver` to 6.3.1
- Updates braces to 3.0.3

## 5.0.0

- Add typescript types
- DevDependency Updates
  - typescript-eslint/eslint-plugin to v6
  - @typescript-eslint/parser to v6
  - typescript to v5
  - eslint-config-prettier to v9
  - eslint-plugin-prettier to v4
  - prettier to v3

_Breaking Changes_

- Update Node to v18
- Add jest config to `__tests__` directories automatically
- Require eslint@^8.1.0
- Use prettier for style rules
- Use typescript for syntax rules
- Require @typescript-eslint/eslint-plugin@^5.2.0 as a peer dependency
- Require eslint-plugin-prettier@^4.0.0 as a peer dependency

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
