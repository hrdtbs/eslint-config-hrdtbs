'use strict';

/**
 * @see https://www.npmjs.com/package/eslint-plugin-react
 * @see https://www.npmjs.com/package/eslint-plugin-react-hooks
 */

module.exports = {
  extends: ['plugin:react/recommended'],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
