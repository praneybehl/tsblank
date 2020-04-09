const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    postcssPresetEnv({}),
    process.env.NODE_ENV === 'production' && cssnano(),
  ],
};
