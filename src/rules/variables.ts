const rules = {
  "no-delete-var": "error",
  "no-label-var": "error",
  "no-restricted-globals": ["error", "event", "fdescribe"],
  "no-shadow-restricted-names": "error",
  "no-undef-init": "error",
  "no-undef": "error",
  "no-unused-vars": [
    "error",
    {
      vars: "all",
      args: "after-used",
      ignoreRestSiblings: true,
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
    },
  ],
};

export default { rules };
