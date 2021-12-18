var OFF = 0, WARN = 1, ERROR = 2;
module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'jest': true
  },

  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 8
  },
  'rules': {

    'brace-style': [WARN, '1tbs', { 'allowSingleLine': true }],
    'indent': [
      'error',
      ERROR,
      {
        'SwitchCase': 1
      }
    ],

    'linebreak-style': [
      ERROR,
      'unix'
    ],

    'quotes': [
      ERROR,
      'single',
      {
        'allowTemplateLiterals': true
      }
    ],

    'semi': [
      ERROR,
      'always'
    ],
    'no-var': ['error'],

    'prefer-const': [
      'error'
    ],
    'curly': ERROR,


    'dot-location': [ERROR, 'property'],

    'camelcase': 'error',
    'prefer-arrow-callback': 'error',
    'keyword-spacing': 'error'


  }
};
