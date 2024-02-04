const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
   mode: 'development',
   entry: path.resolve(__dirname, 'src', 'index.jsx'),
   output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new webpack.HotModuleReplacementPlugin(),
   ],
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader',
         },
         {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: ['file-loader'],
         },
         {
            test: /\.css$/,
            use: [
               'style-loader',
               {
                  loader: 'css-loader',
                  options: {
                     importLoaders: 1,
                     modules: true,
                  },
               },
            ],
         },
      ],
   },
   resolve: {
      extensions: ['.js', '.jsx'],
   },
   devServer: {
      port: 3002,
      open: true,
      hot: true,
   },
};
