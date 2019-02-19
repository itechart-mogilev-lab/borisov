var path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
      app: './src/main.js',
    },
    output: {
      filename: "bundle.  [hash].js",
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: "./src/index.html"
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ['babel-loader', 'eslint-loader'] 
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      watchContentBase: true,
      hot: true,
      port: 9000
    }
};