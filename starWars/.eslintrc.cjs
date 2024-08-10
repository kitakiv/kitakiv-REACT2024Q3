module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', 'build', 'components', 'features', 'store'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react-compiler', '@typescript-eslint', 'prettier'],
  rules: {
    'react-compiler/react-compiler': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
