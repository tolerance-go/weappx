module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': 0,
  },
};
