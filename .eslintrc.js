module.exports = {
  extends: ["eslint:recommended"],
  parser: "babel-eslint",
  env: {
    node: true,
    jasmine: true,
    es6: true
  },
  rules: {
    quotes: ["error", "single", { avoidEscape: true }],
    "comma-dangle": ["error", "always-multiline"],
    "no-unused-vars": ["error", { varsIgnorePattern: "^_" }],
    "no-console": "off"
  },
  settings: {},
  globals: {
    localStorage: true,
    fetch: true
  }
};
