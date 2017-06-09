'use strict';

module.exports = {
  rules: {
    'require-jsdoc': 2,
    'valid-jsdoc': [2, {
      prefer: {
        'return': 'returns'
      },
      requireReturn: false,
      requireParamDescription: true,
      requireReturnDescription: true
    }]
  }
};
