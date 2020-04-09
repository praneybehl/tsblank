import path from 'path';

import { Configuration, EnvironmentPlugin, Plugin } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const publicPath = '/';
const fromRoot = path.resolve.bind(null, __dirname);
const isProduction = process.env.NODE_ENV === 'production';

interface CssLoaderModulesConfig {
  mode: 'local' | 'global';
  localIdentName?: string;
  camelCase?: boolean;
  context?: string;
  hashPrefix?: string;
}

type CssLoaderModulesOption = boolean | CssLoaderModulesConfig;

const cssModulesLocalConfig: CssLoaderModulesConfig = {
  mode: 'local',
  localIdentName: isProduction
    ? '[hash:base64:5]'
    : '[name]_[local]_[hash:base64:5]',
};

const cssModulesGlobalConfig: CssLoaderModulesConfig = {
  mode: 'global',
};

const postcssLoader = (modules: CssLoaderModulesOption) => [
  { loader: MiniCssExtractPlugin.loader, options: { hmr: !isProduction } },
  {
    loader: 'css-loader',
    options: { modules, importLoaders: 1, localsConvention: 'dashesOnly' },
  },
  { loader: 'postcss-loader' },
];

const configuration: Configuration & { devServer?: DevServerConfiguration } = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    app: ['./src/index.tsx'],
  },
  output: {
    publicPath,
    filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
    path: fromRoot('dist'),
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: fromRoot('node_modules'),
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.local\.css$/,
        exclude: fromRoot('node_modules'),
        use: postcssLoader(cssModulesLocalConfig),
      },
      {
        test: /\.global\.css$/,
        exclude: fromRoot('node_modules'),
        use: postcssLoader(cssModulesGlobalConfig),
      },
      {
        test: /\.css$/,
        include: fromRoot('node_modules'),
        use: postcssLoader(false),
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
  },
  plugins: [
    new EnvironmentPlugin({ NODE_ENV: 'development' }),
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].[chunkhash].css' : '[name].css',
    }),
    new HtmlWebpackPlugin({
      title: 'app',
      template: fromRoot('src/index.html'),
      inject: 'body',
    }),
  ].filter(Boolean) as Plugin[],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};

export default configuration;
