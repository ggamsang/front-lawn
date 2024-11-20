const prettierConfig = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
}

export default {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'tonyfromundefined',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', prettierConfig, { usePrettierrc: false }],
    semi: ['error', 'never'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
    },
  ],
}
