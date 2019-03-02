'use strict';

const version = '>=11.0.0';

module.exports = {
  extends: ['./lib/index.js', './lib/node.js', './es2018.js'],
  rules: {
    'node/no-unsupported-features/es-builtins': [2, { version }],
    'node/no-unsupported-features/es-syntax': [2, { version }],
    'node/no-unsupported-features/node-builtins': [2, { version }],
  },
};
