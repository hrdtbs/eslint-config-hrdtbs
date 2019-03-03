'use strict';

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],

  rules: {
    'node/no-unsupported-features/es-syntax': 0,

    'no-dupe-class-members': 0,

    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],

    'no-array-constructor': 0,
    '@typescript-eslint/no-array-constructor': 2,

    '@typescript-eslint/adjacent-overload-signatures': 2,
    '@typescript-eslint/no-namespace': [2, { allowDeclarations: true }],
    '@typescript-eslint/prefer-namespace-keyword': 2,

    '@typescript-eslint/no-require-imports': 2,
    '@typescript-eslint/no-var-requires': 2,
    '@typescript-eslint/no-object-literal-type-assertion': 2,
    '@typescript-eslint/no-unnecessary-type-assertion': 2,

    '@typescript-eslint/restrict-plus-operands': 2,
  },
  settings: {
    node: {
      tryExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.node'],
    },
  },
};
