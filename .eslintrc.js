module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    indent: ['error', 2],

    // 'linebreak-style': ['error', 'unix'],
    'linebreak-style': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-console': 'warn',
    'no-unused-vars': 0,
    'arrow-parens': 0,

    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    'comma-dangle': [2, 'never'],

    // 控制逗号前后的空格
    'comma-spacing': [2, { before: false, after: true }],

    // 控制逗号在行尾出现还是在行首出现
    'comma-style': [2, 'last'],
    'no-tabs': 0,
    'import/no-extraneous-dependencies': [1, { devDependencies: true }],
    'import/no-unresolved': 0,
    'import/no-absolute-path': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/html-self-closing': 'off',
    'vue/no-multiple-template-root': 1,
    'max-len': ['warn', 80],
    'no-param-reassign': ['error', { props: false }],
    'no-use-before-define': 1,
    'no-unused-expressions': 0,

    // add new line above comment
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        allowArrayStart: true
      }
    ],

    // 'newline-before-return': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  }
}
