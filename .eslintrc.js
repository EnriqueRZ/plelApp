module.exports = {
	env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
  },
  plugins: [
    'react',
    'react-native'
  ],
  rules: {
    //"indent": [2, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
    "react/prop-types": 0,
    "no-use-before-define": ["error", { "variables": false }],
    //"react/jsx-indent": [2, "tab"],
    //"react/jsx-indent-props": [2, "tab"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-named-as-default": 0
  },
};
