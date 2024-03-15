module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["solid"],
  extends: [
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:solid/typescript",
    "prettier",
    "plugin:perfectionist/recommended-line-length",
  ],
  parserOptions: {
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
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/consistent-type-imports": "error",
  },
  ignorePatterns: ["node_modules", "dist", "*.config.ts"],
};
