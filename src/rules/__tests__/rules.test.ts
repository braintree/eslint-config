import bestPractices from "../best-practices";
import errors from "../errors";
import strict from "../strict";
import variables from "../variables";
const prettier = require("eslint-config-prettier");
// For some reason, there's something wrong with how the typescript
// package is getting imported, and it's throwing an error to attempt
// it. Try again later.
// import typescript = require("@typescript-eslint/eslint-plugin");

describe("Rules", () => {
  const allRules = {} as Record<string, string>;

  Object.keys(prettier.rules).forEach((ruleName) => {
    allRules[ruleName] = "prettier";
  });
  // Object.keys(typescript.rules).forEach((ruleName) => {
  //   allRules[ruleName] = "typescript";
  // });

  describe.each([
    ["best-practices.js", Object.keys(bestPractices.rules)],
    ["errors.js", Object.keys(errors.rules)],
    ["strict.js", Object.keys(strict.rules)],
    ["variables.js", Object.keys(variables.rules)],
  ])("Rules in %s", (file, rules) => {
    it.each(rules)("does not duplicate %p", (ruleName) => {
      if (ruleName in allRules) {
        throw new Error(
          `Found ${ruleName} in ${file}, but ${ruleName} already exists in ${allRules[ruleName]}`,
        );
      }

      allRules[ruleName] = file;
    });
  });
});
