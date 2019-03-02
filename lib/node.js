'use strict';

module.exports = {
  env: {
    node: true,
  },
  plugins: ['node'],
  rules: {
    'handle-callback-err': 2,
    'no-new-require': 2,
    'node/no-deprecated-api': 2,
    'node/no-extraneous-import': 2,
    'node/no-extraneous-require': 2,
    'node/no-missing-import': 2,
    'node/no-missing-require': 2,
    'node/no-unpublished-bin': 2,
    'node/no-unpublished-import': 2,
    'node/no-unpublished-require': 2,
    'node/no-unsupported-features/es-builtins': 2,
    'node/no-unsupported-features/es-syntax': 2,
    'node/no-unsupported-features/node-builtins': 2,
    'node/process-exit-as-throw': 2,
    'node/shebang': 2,
  },
};
