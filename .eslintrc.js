/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the OWASP Coffee Shop contributors.
 * SPDX-License-Identifier: MIT
 */

module.exports = {
  extends: 'standard-with-typescript',
  env: {
    browser: true,
    node: true,
    jasmine: true,
    mocha: true,
    jest: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    project: './tsconfig.json'
  },
  ignorePatterns: [
    'app/private/**',
    'vagrant/**',
    'frontend/**',
    'data/static/codefixes/**',
    'dist/**'
  ],
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/no-misused-promises': 'off', 
        '@typescript-eslint/explicit-function-return-type': 'off', 
        '@typescript-eslint/restrict-plus-operands': 'off', 
        '@typescript-eslint/strict-boolean-expressions': 'off', 
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-var-requires': 'off' 
      }
    }
  ]
}
