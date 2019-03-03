'use strict';

module.exports = {
  extends: ['./+browser.js'],
  rules: {
    // Next.js includes babel-plugin-react-require
    'react/react-in-jsx-scope': 0,
  },
};
