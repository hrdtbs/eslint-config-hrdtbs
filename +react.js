'use strict';

/**
 * @see https://www.npmjs.com/package/eslint-plugin-react
 * @see https://www.npmjs.com/package/eslint-plugin-react-hooks
 */

module.exports = {
  /**
   * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/index.js#L119-L150
   */
  extends: ['plugin:react/recommended'],
  /**
   * @see https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/src/index.js
   */
  plugins: ['react-hooks'],
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
