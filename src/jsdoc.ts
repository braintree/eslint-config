import type { Linter } from "eslint";

const config: Linter.Config[] = [
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      "require-jsdoc": "error",
      "valid-jsdoc": [
        "error",
        {
          prefer: {
            return: "returns",
          },
          requireReturn: false,
          requireParamDescription: true,
          requireReturnDescription: true,
        },
      ],
    },
  },
];

export default config;
