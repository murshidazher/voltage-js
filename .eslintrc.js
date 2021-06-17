module.exports = {
  extends: "airbnb-base",
  plugins: ["import"],
  env: {
    node: true
  },
  rules: {
    "prefer-arrow-callback": 0
  },
  parserOptions: {
    ecmaVersion: 2017
  },
  env: {
    browser: true,
    node: true,
    es6: true
  }
};
