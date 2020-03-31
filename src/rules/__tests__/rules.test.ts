import bestPractices = require('../best-practices');
import errors = require('../errors');
import strict = require('../strict');
import variables = require('../variables');
import prettier = require('eslint-plugin-prettier');
import typescript = require('@typescript-eslint/eslint-plugin');

describe('Rules', () => {
  test('does not duplicate rules between rules files', () => {
    const files = {
      prettier,
      typescript,
      'best-practices.js': bestPractices,
      'errors.js': errors,
      'strict.js': strict,
      'variables.js': variables
    };

    const allRules = {};

    Object.keys(files).forEach(function (file) {
      Object.keys(files[file].rules).forEach(function (ruleName) {
        if (ruleName in allRules) {
          throw new Error(
            `Found ${ruleName} in ${file}, but ${ruleName} already exists in ${allRules[ruleName]}`
          );
        }

        allRules[ruleName] = file;
      });
    });
  });
});
