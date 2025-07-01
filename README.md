# eslint-config-braintree

Shared linting configuration for braintree js projects.

- [index.js](./index.js): shared configuration
- [client.js](./client.js): client side configuration
- [server.js](./server.js): server side configuration
- [jsdoc.js](./jsdoc.js): jsdoc configuration

## Consuming

Install eslint@^9

```bash
npm install eslint@^9
```

Install the ESLint config

```bash
npm i --save-dev eslint-config-braintree
```

Eslint requires all the plugins that the configu uses to be installed at
the root of the project as well.

```bash
npm i --save-dev @typescript-eslint/eslint-plugin eslint-plugin-prettier
```

### ESLint Flat Config (v9+)

In your project's `eslint.config.js`:

#### Default (Flat Config)

```javascript
const braintreeConfig = require("eslint-config-braintree");

module.exports = braintreeConfig;
```

#### Browserify

```javascript
const braintreeClientConfig = require("eslint-config-braintree/client");

module.exports = braintreeClientConfig;
```

#### Node

```javascript
const braintreeServerConfig = require("eslint-config-braintree/server");

module.exports = braintreeServerConfig;
```

#### Browserify + ES6

```javascript
const braintreeClientConfig = require("eslint-config-braintree/client");
const braintreeEs6Config = require("eslint-config-braintree/es6");

module.exports = [...braintreeClientConfig, ...braintreeEs6Config];
```

### Legacy Configuration (.eslintrc - ESLint v8 and below)

In your project's `.eslintrc.*`:

#### yaml

##### Default (yaml)

```yaml
---
extends: braintree
```

##### Browserify (yaml)

```yaml
---
extends: braintree/client
```

##### Node (yaml)

```yaml
---
extends: braintree/server
```

##### Browserify + ES6 (yaml)

```yaml
---
extends:
  - braintree/client
  - braintree/es6
```

#### json

##### Default (json)

```json
{
  "extends": "braintree"
}
```

##### Browserify (json)

```json
{
  "extends": "braintree/client"
}
```

##### Node (json)

```json
{
  "extends": "braintree/server"
}
```

##### Browserify + ES6 (json)

```json
{
  "extends": ["braintree/client", "braintree/es6"]
}
```

## Customizing Rules

### Flat Config (ESLint v9+)

You can extend and override rules by adding additional configuration objects to the array:

```javascript
const braintreeConfig = require("eslint-config-braintree");

module.exports = [
  ...braintreeConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-new-object": "warn", // Change from error to warn
    },
  },
];
```

For different file patterns:

```javascript
const braintreeConfig = require("eslint-config-braintree");

module.exports = [
  ...braintreeConfig,
  {
    files: ["**/*.js"],
    rules: {
      "no-multi-spaces": ["error", { ignoreEOLComments: false }],
    },
  },
];
```

### Legacy Configuration

You can specify a `.eslintrc` for a subdirectory to change the rules
that are enforced. For instance, in a node project you could extend from
`eslint-config-braintree/server` at the top-level, and
`eslint-braintree-config/client` at the `public/.eslintrc` level.

See [Configuration File
Formats](https://eslint.org/docs/user-guide/configuring#configuration-file-formats)
for information on all supported `.eslintrc` file formats.

To override rules, add the new config under `rules` in your rc file. Be
sure to properly override any options set by the parent. See [Extending
Configuration
Files](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for details.

For example, to change the `no-new-object` rule to warn instead of
error:

```yaml
---
extends: braintree/server
rules:
  no-new-object: 1
```

```json
{
  "extends": "braintree/server",
  "rules": {
    "no-new-object": 1
  }
}
```

In another example, to allow end of line comments, you'd override the
`"no-multi-spaces"` rule options:

```yaml
---
extends: braintree/server
rules:
  no-multi-spaces:
    - 2
    - ignoreEOLComments: false
```

```json
{
  "extends": "braintree/server",
  "rules": {
    "no-multi-spaces": [2, { "ignoreEOLComments": false }]
  }
}
```

## Test Files

By default, any files in a `__tests__` folder, whether at the top level
of the directory or within another directory will be configured to be
used in the [Jest](https://jestjs.io/) and ES2020 environments.
