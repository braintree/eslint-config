eslint-config-braintree
===

Shared linting configuration for braintree js projects.

- [index.js](./index.js): shared configuration
- [client.js](./client.js): client side configuration
- [server.js](./server.js): server side configuration

Consuming
---

Install the eslint config

```bash
npm i -D eslint-config-braintree
```

In your project's .eslintrc:

__default__
```yaml
---
extends: braintree
```

__browserify__
```yaml
---
extends: braintree/client
```

__node__
```yaml
---
extends: braintree/server
```

__browserify + es6__
```yaml
---
extends:
  - braintree/client
  - braintree/es6
```

You can specify a `.eslintrc` for a subdirectory to change the rules that are enforced. For instance, in a node project you could extend from `eslint-config-braintree/server` at the top-level, and `eslint-braintree-config/client` at the `public/.eslintrc` level.
