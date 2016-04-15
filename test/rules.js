'use strict';

var bestPractices = require('../rules/best-practices');
var errors = require('../rules/errors');
var style = require('../rules/style');
var strict = require('../rules/strict');
var variables = require('../rules/variables');

describe('Rules', function () {
  it('does not duplicate rules between rules files', function () {
    var files = {
      'best-practices.js': bestPractices,
      'errors.js': errors,
      'style.js': style,
      'strict.js': strict,
      'variables.js': variables
    };

    var allRules = {};

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
