module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'react/function-component-definition': ['error', { namedComponents: 'function-expression' }],
    'camelcase': 0;
  },
};
