'use strict';

const globals = require('globals');

module.exports = {
  extends: ['./es2016.js'],
  globals: globals.es2017,
  parserOptions: {
    ecmaVersion: 8,
  },
  rules: {
    'no-await-in-loop': 0,
    'no-return-await': 2,
    'require-await': 2,
    'comma-dangle': [
      2,

      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
  },
};
