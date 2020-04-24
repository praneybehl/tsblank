module.exports = ({ env }) => ({
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        shippedProposals: true,
        corejs: 3,
        modules: env('test') ? 'commonjs' : false,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', { regenerator: true }],
    [
      'babel-plugin-module-resolver',
      { alias: { '~': './src' }, extensions: ['.ts', '.tsx', '.js', '.jsx'] },
    ],
    ['babel-plugin-styled-components', { pure: true }],
  ],
});
