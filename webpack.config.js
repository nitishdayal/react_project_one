const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = (env) => ({
  context: path.resolve(__dirname, 'src'),
  devtool: env === 'prod' ? 'source-map' : 'cheap-module-eval-source-map',
  entry: {
    main: './index.jsx',
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: './dist',
    filename: '[chunkhash].[name].js'
  },
  plugins: [
    new DashboardPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      appMountId: 'app'
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
        presets: [
          ['es2015', {
            'loose': true,
            'modules': 'commonjs'
          }],
          'react'
        ]
      }
    }]
  },
  resolve: {
    extensions: ['.webpack.js', '.js', '.jsx']
  }
});
