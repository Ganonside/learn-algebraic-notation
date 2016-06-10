var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Webpack = require('webpack');
var path = require('path');

 module.exports = {
  entry: {
    'LearnAlgebraicNotation': './index.js',
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'index.js')
        ],
        loader: 'babel',
        query: {
          presets: [ 'es2015', 'react' ],
        }
      },
      {
        test: /\.(?:c|le)ss$/,
        include: [ path.resolve(__dirname, 'styles') ],
        loader: ExtractTextPlugin.extract('style!less'),
      },
      {
        test: /\.svg$/,
        include: [ path.resolve(__dirname, 'sprites') ],
        loader: 'react-svg',
        query: {
          es5: true,
          svgo: {
            plugins: [{removeTitle: false}],
            floatPrecision: 2
          }
        }
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
 };
