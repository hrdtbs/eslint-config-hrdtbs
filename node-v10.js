'use strict';

const version = '>=10.12.0';

module.exports = {
  extends: ['./lib/base.js', './lib/node.js', './es2018.js'],
  rules: {
    'node/no-unsupported-features/es-builtins': [2, { version }],
    'node/no-unsupported-features/es-syntax': [2, { version }],
    'node/no-unsupported-features/node-builtins': [2, { version }],
  },
};
