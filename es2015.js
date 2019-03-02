'use strict';

const globals = require('globals');

module.exports = {
  env: {
    es6: true,
  },
  extends: './es5.js',
  globals: globals.es2015,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
  },
  rules: {
    'arrow-body-style': 2,
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': 2,
    'comma-dangle': [2, 'always-multiline'],
    'generator-star-spacing': [
      2,
      {
        anonymous: 'neither',
        method: 'neither',
        named: 'after',
      },
    ],
    'no-async-promise-executor': 2,
    'no-confusing-arrow': [
      2,
      {
        allowParens: true,
      },
    ],
    'no-duplicate-imports': 2,
    'no-misleading-character-class': 2,
    'no-useless-computed-key': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'object-shorthand': [2, 'methods'],
    'prefer-arrow-callback': [
      2,
      {
        allowNamedFunctions: true,
      },
    ],
    'prefer-const': 2,
    'prefer-destructuring': [
      2,
      {
        array: false,
        object: true,
      },
    ],
    'prefer-numeric-literals': 2,
    'prefer-rest-params': 2,
    'prefer-template': 2,
    'require-atomic-updates': 2,
    'rest-spread-spacing': 2,
    'template-curly-spacing': 2,
    'template-tag-spacing': 2,
    'yield-star-spacing': [2, 'after'],
  },
};
