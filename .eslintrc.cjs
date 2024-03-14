module.exports = {
  //   env: {
  //     browser: true,
  //     es2021: true,
  //     node: true,
  //   },
  parser: "@typescript-eslint/parser",
  plugins: ["solid"],
  extends: [
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:solid/typescript",
    "prettier",
    "plugin:perfectionist/recommended-line-length",
  ],
  //   overrides: [
  //     {
  //       env: {
  //         node: true,
  //       },
  //       files: [".eslintrc.{js,cjs}"],
  //       parserOptions: {
  //         sourceType: "script",
  //       },
  //     },
  //   ],
  parserOptions: {
    // ecmaVersion: "latest",
    // sourceType: "module",
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    "perfectionist/sort-objects": [
      "error",
      {
        type: "line-length",
        order: "desc",
        "styled-components": false,
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/consistent-type-imports": "error",
  },
  ignorePatterns: ["node_modules", "dist", "*.config.ts"],
};
