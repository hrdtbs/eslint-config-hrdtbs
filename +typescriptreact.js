'use strict';

module.exports = {
  rules: {
    // Functions such as FunctionComponent also require return values
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Props data type is secured to some extent by typescript
    'react/prop-types': 'off',
  },
};
