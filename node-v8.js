'use strict';

module.exports = {
  extends: ['./lib/index.js', './lib/node.js', './es2018.js'],
  rules: {
    'node/no-unsupported-features/es-builtins': [2, { version: '>=8.10' }],
    'node/no-unsupported-features/es-syntax': [2, { version: '>=8.10' }],
    'node/no-unsupported-features/node-builtins': [2, { version: '>=8.10' }],
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
