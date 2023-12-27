import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  eslintConfigPrettier,

  {
    files: ['**/*.js', '**/*.ts'],
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    rules: {
      quotes: ['error', 'single'],
      semi: 'error',
      'prefer-const': 'error',
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
      },
    },

    plugins: {
      tsLint: ts,
    },
  },
];
