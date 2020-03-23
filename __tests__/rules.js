const bestPractices = require('../rules/best-practices');
const errors = require('../rules/errors');
const style = require('../rules/style');
const strict = require('../rules/strict');
const variables = require('../rules/variables');

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
          throw new Error('Found ' + ruleName + ' in ' + file + ', but ' + ruleName + ' already exists in ' + allRules[ruleName]);
        }

        allRules[ruleName] = file;
      });
    });
  });
});
