/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    env: {
        node: true
    },
    plugins: ['@typescript-eslint', 'simple-import-sort', 'import', 'regexp'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:unicorn/recommended',
        'plugin:regexp/recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest'
    },
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'no-var': 'error',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-named-as-default': 'warn',
        'unicorn/filename-case': [
            'error',
            {
                cases: {
                    camelCase: true,
                    pascalCase: true
                }
            }
        ],
        'unicorn/prefer-module': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-unused-properties': 'warn',
        'unicorn/prefer-string-replace-all': 'warn',
        'unicorn/no-unsafe-regex': 'error',
        'unicorn/prefer-at': 'error',
        'unicorn/prefer-node-protocol': 'error',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-abusive-eslint-disable': 'off',
        'unicorn/prefer-spread': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {
                'ts-ignore': 'allow-with-description',
                'ts-nocheck': false
            }
        ]
    },
    overrides: [
        {
            files: ['migrations/*.js'],
            rules: {
                'unicorn/filename-case': 'off'
            }
        }
    ]
}
