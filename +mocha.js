'use strict';

module.exports = {
  overrides: [
    {
      files: ['**/test/**/*.js', '**/test/**/*.ts'],
      env: {
        mocha: true,
      },
      rules: {
        'no-invalid-this': 0,
      },
    },
  ],
};
