'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    './possible-errors.js',
    './best-practices.js',
    './stylistic-issues.js',
    './variables.js',
    './sort.js',
  ],
  rules: {
    /**
     * Eslint-comments settings
     * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/
     */
    'eslint-comments/disable-enable-pair': [2, { allowWholeFile: true }],
    'eslint-comments/no-unlimited-disable': 0,
    'eslint-comments/no-unused-disable': 2,
    'eslint-comments/no-restricted-disable': 2,
    'eslint-comments/no-use': 0,
  },
};
