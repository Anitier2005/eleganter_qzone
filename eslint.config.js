// eslint.config.js

export default [
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                browser: true,
                es2021: true,
                node: true,
            },
        },
        rules: {
            // 设置所有 ESLint 推荐规则为 warning 级别
            'no-debugger': 'warn',
            'no-console': 'warn',
            'no-constant-condition': 'warn',
            'no-control-regex': 'warn',
            'no-dupe-args': 'warn',
            'no-dupe-keys': 'warn',
            'no-duplicate-case': 'warn',
            'no-empty': 'warn',
            'no-ex-assign': 'warn',
            'no-extra-semi': 'warn',
            'no-func-assign': 'warn',
            'no-inner-declarations': 'warn',
            'no-invalid-regexp': 'warn',
            'no-irregular-whitespace': 'warn',
            'no-negated-in-lhs': 'warn',
            'no-obj-calls': 'warn',
            'no-prototype-builtins': 'warn',
            'no-regex-spaces': 'warn',
            'no-sparse-arrays': 'warn',
            'no-unexpected-multiline': 'warn',
            'no-unreachable': 'warn',
            'no-unsafe-finally': 'warn',
            'use-isnan': 'warn',
            'valid-typeof': 'warn',

            // 分号必须存在
            semi: ['warn', 'always'],

            // 函数命名风格：camelCase
            'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
            camelcase: [
                'warn',
                {
                    properties: 'never',
                    ignoreDestructuring: true,
                    ignoreImports: true,
                    ignoreGlobals: true,
                },
            ],

            // 花括号风格：K&R 风格，{ 在函数名同一行
            'brace-style': [
                'warn',
                '1tbs',
                {
                    allowSingleLine: false,
                },
            ],

            // 不允许未使用的变量
            'no-unused-vars': [
                'warn',
                {
                    args: 'none',
                    varsIgnorePattern: '^_',
                },
            ],
        },
    },
];