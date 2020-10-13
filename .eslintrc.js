module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "warn",
      {
        semi: true,
        trailingComma: "none",
        singleQuote: false,
        printWidth: 140,
        jsxBracketSameLine: true,
        tabWidth: 2,
        bracketSpacing: true,
        jsxSingleQuote: false,
        htmlWhitespaceSensitivity: "ignore"
      }
    ]
  }
};
