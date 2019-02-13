module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    "sourceType": "module",
  },
  extends: [
    "@nuxtjs",
    'airbnb-base',
  ],
  rules: {
    'max-len': ['error', { code: 120 }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
  },
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
};
