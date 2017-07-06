var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, './lib'),
    filename: "index.js",
    libraryTarget: 'umd',
    library: 'ReactSingleDropdown'
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, './src')
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?minimize!sass-loader',
        include: path.join(__dirname, './src')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?minimize',
        include: path.join(__dirname, './src')
      }
    ]
  }
};
