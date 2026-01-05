# CHANGELOG

## UNRELEASED

- Update dev dependencies
  - @types/jest to 30.0.0
  - jest to 30.2.0
  - prettier to 3.7.4
  - ts-jest to 29.4.6
  - typescript to 5.9.3
- Update dependencies
  - eslint-plugin-prettier" to 5.5.4
  - globals" to 16.5.0
  - typescript-eslint" to 8.50.1
- Update Node to v24

## 7.0.0

_Breaking Changes_

- Update Node to v22
- Updating ESLint and migrating to the flat config
- Adding in additional rules

## 6.0.1

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
