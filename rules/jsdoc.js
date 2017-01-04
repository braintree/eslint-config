'use strict';

module.exports = {
  rules: {
    'valid-jsdoc': [2, {
      prefer: {
        'return': 'returns'
      },
      requireReturn: true,
      requireParamDescription: true,
      requireReturnDescription: true
    }]
  }
};
