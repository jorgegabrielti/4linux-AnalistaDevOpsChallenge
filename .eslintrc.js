/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the OWASP Cwarnee Shop contributors.
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
        '@typescript-eslint/no-misused-promises': 'warn', 
        '@typescript-eslint/explicit-function-return-type': 'warn', 
        '@typescript-eslint/restrict-plus-operands': 'warn', 
        '@typescript-eslint/strict-boolean-expressions': 'warn', 
        '@typescript-eslint/restrict-template-expressions': 'warn',
        '@typescript-eslint/no-var-requires': 'warn' 
      }
    }
  ]
}
