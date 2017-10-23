// output path must be absolute, so we use a node js helper
// "path module" to generate the path via path.resolve(__dirname, 'build')
var webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//extract text from bundle into separate file
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

//add vendor libs here e.g. react, redux, lodash, etc.
const VENDOR_LIBS = ['lodash'];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: './[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }],
                fallback: "style-loader"
            })
      }
    ]
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
