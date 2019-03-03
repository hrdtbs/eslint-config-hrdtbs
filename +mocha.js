'use strict';

module.exports = {
  overrides: [
    {
      // Enable in tests? folders
      files: ['**/test/**', '**/tests/**'],
      env: {
        // Adds all of the Mocha testing global variables.
        mocha: true,
      },
      rules: {
        'no-invalid-this': 0,
      },
    },
  ],
};
