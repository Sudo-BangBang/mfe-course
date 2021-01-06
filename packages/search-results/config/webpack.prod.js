const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
      filename: '[name].[contenthash].js',
      publicPath: '/searchresults/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'searchresults',
      filename: 'remoteEntry.js',
      exposes: {
        './SearchResultsApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    })
  ],
};

module.exports = merge(commonConfig, prodConfig);
