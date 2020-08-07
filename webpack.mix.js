const mix = require('laravel-mix');

mix
  .combine(['src/index.js'], 'dist/index.js')
