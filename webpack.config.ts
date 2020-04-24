import path from 'path';

import { ConfigurationFactory } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

type WebpackEnv = Parameters<ConfigurationFactory>[0];

const envMatches = (matcher: RegExp) => (env?: WebpackEnv) =>
  matcher.test(typeof env === 'string' ? env : String(env?.NODE_ENV));

const fromRoot = path.resolve.bind(null, __dirname);
const isProd = envMatches(/production/);

const configuration: ConfigurationFactory = (env) => ({
  mode: isProd(env) ? 'production' : 'development',
  devtool: isProd(env) ? 'source-map' : 'inline-source-map',
  entry: {
    app: ['./src/index.tsx'],
  },
  output: {
    filename: isProd(env) ? '[name].[chunkhash].js' : '[name].js',
    path: fromRoot('dist'),
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: fromRoot('node_modules'),
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
  devServer: {
    host: 'localhost',
    hot: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'app',
      template: fromRoot('src/index.html'),
      inject: 'body',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
});

export default configuration;
