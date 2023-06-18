module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "plugin:prettier/recommended"
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: {
    jsx: true
  } },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'react', 'react-hooks'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "react/react-in-jsx-scope": "off"
  },
}
