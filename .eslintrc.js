export default {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: { jsx: true },
    sourceType: "module",
  },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {},
};
