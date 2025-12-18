const rules = {
  "import/no-unresolved": 2,
  "import/no-commonjs": 2,
  "import/order": [
    "error",
    {
      groups: [
        "builtin",
        "external",
        "internal",
        ["parent", "sibling"],
        "index",
      ],
    },
  ],
};

export default { rules };
