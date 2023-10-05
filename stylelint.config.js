module.exports = {
  extends: [
    '@linaria/stylelint-config-standard-linaria',
    'stylelint-prettier/recommended',
  ],
  overrides: [
    {
      files: ['src/**/*.{jsx,tsx}'],
    },
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'rule-empty-line-before': 'never',
    'block-no-empty': null,
    'function-no-unknown': null,
  },
};
