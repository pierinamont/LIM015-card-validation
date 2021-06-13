module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    "linebreak-style": [0,"error", "windows"],
    "no-trailing-spaces": [2, { "skipBlankLines": true }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "object-shorthand": ["error", "always"],
  },
};
