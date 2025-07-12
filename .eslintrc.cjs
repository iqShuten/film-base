module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Интеграция Prettier в ESLint
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': 'error', // Выводит ошибки при несоответствии формату Prettier
    'react/react-in-jsx-scope': 'off', // Для React 17+
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '|': 'before',
        },
      },
    ],
  },
};
