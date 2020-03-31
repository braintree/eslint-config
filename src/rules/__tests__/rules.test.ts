import bestPractices = require('../best-practices');
import errors = require('../errors');
import style = require('../style');
import strict = require('../strict');
import variables = require('../variables');

describe('Rules', () => {
  test('does not duplicate rules between rules files', () => {
    const files = {
      'best-practices.js': bestPractices,
      'errors.js': errors,
      'style.js': style,
      'strict.js': strict,
      'variables.js': variables
    };

    const allRules = {};

    Object.keys(files).forEach(function (file) {
      Object.keys(files[file].rules).forEach(function (ruleName) {
        if (ruleName in allRules) {
          throw new Error(
            'Found ' +
              ruleName +
              ' in ' +
              file +
              ', but ' +
              ruleName +
              ' already exists in ' +
              allRules[ruleName]
          );
        }

        allRules[ruleName] = file;
      });
    });
  });
});
