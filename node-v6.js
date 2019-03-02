'use strict';

module.exports = {
  extends: ['./lib/node.js', './es2016.js'],
  rules: {
    'node/no-unsupported-features/es-builtins': [2, { version: '>=6.6' }],
    'node/no-unsupported-features/es-syntax': [2, { version: '>=6.6' }],
    'node/no-unsupported-features/node-builtins': [2, { version: '>=6.6' }],
    'node/no-deprecated-api': [
      2,
      {
        ignoreModuleItems: [
          'assert.deepEqual',
          'assert.equal',
          'assert.notDeepEqual',
          'assert.notEqual',
        ],
      },
    ],
  },
};
