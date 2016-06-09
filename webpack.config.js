var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Webpack = require('webpack');

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
        include: [ path.resolve(__dirname, 'src') ],
        loader: 'babel',
      },
      {
        test: /\.(?:c|le)ss$/,
        include: [ path.resolve(__dirname, 'styles') ],
        loader: ExtractTextPlugin.extract('style!less'),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css');
  ],
 };
