const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
   mode: 'production',
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
            test: /\.html$/i,
            loader: "html-loader",
            options: {
              sources: {
                list: [
                  // All default supported tags and attributes
                  "...",
                  {
                    tag: "img",
                    attribute: "data-src",
                    type: "src",
                  },
                  {
                    tag: "img",
                    attribute: "data-srcset",
                    type: "srcset",
                  },
                ],
                urlFilter: (attribute, value, resourcePath) => {
                  // The `attribute` argument contains a name of the HTML attribute.
                  // The `value` argument contains a value of the HTML attribute.
                  // The `resourcePath` argument contains a path to the loaded HTML file.
    
                  if (/example\.pdf$/.test(value)) {
                    return false;
                  }
    
                  return true;
                },
              },
            },
          },
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader',
         },
         {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: ['url-loader'],
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
