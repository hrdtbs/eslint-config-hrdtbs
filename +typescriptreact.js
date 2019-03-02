'use strict';

module.exports = {
  rules: {
    // functions such as FunctionComponent also require return values
    '@typescript-eslint/explicit-function-return-type': 'off',
    // props data type is secured to some extent by typescript
    'react/prop-types': 'off',
  },
};
