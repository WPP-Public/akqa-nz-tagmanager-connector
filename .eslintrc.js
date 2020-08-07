module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'vue/no-v-html': 'off'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'node_modules/laravel-mix/setup/webpack.config.js'
      }
    }
  }
};
