'use strict';

module.exports = {
  extends: ['./es2018.js', './+browser', './+react'],
  rules: {
    // Next.js includes babel-plugin-react-require
    'react/react-in-jsx-scope': 0,
  },
};
