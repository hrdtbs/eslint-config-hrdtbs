'use strict';

module.exports = {
  rules: {
    'no-console': 0,
    'no-constant-condition': [2, { checkLoops: false }],
    'no-empty': [2, { allowEmptyCatch: true }],
    'for-direction': 2,
    'getter-return': [2, { allowImplicit: true }],
    'no-async-promise-executor': 2,
    'no-await-in-loop': 2,
    'no-compare-neg-zero': 2,
    'no-cond-assign': [2, 'always'],
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 2,
    'no-empty-character-class': 1,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
  },
};
