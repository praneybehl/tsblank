const srcDependencies = {
  devDependencies: false,
  optionalDependencies: false,
  peerDependencies: false,
};

const devDependencies = {
  devDependencies: true,
  optionalDependencies: false,
  peerDependencies: false,
};

module.exports = {
  parser: '@typescript-eslint/parser',
  env: { es6: true, node: true, browser: false },
  settings: { 'import/resolver': 'babel-module' },
  plugins: ['@typescript-eslint', 'filenames', 'import', 'jest', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'camelcase': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '[iI]gnored' },
    ],
    'filenames/match-regex': ['error', '^[a-z-.]+$', true],
    'filenames/match-exported': ['error', 'kebab'],
    'import/no-cycle': 'error',
    'import/no-self-import': 'error',
    'import/no-unused-modules': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-extraneous-dependencies': ['error', devDependencies],
    'import/order': [
      'warn',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'pathGroups': [{ pattern: '~/**', group: 'internal' }],
        'newlines-between': 'always',
      },
    ],
    'prettier/prettier': 'warn',
  },
  overrides: [
    {
      files: ['*.config.*'],
      rules: {
        'filenames/match-exported': 'off',
      },
    },
    {
      files: ['src/**/*'],
      env: { node: false, browser: true },
      rules: {
        'no-console': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        'import/no-extraneous-dependencies': ['error', srcDependencies],
      },
    },
    {
      files: ['**/*.test.*'],
      env: { 'node': true, 'jest/globals': true },
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'import/no-extraneous-dependencies': ['error', devDependencies],
      },
    },
  ],
};
