module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html',
  ],
  // add your custom rules here
  rules: {
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
  },
  globals: {},
};
