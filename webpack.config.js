const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your app
  output: {
    filename: 'main.js', // Output bundle name
    path: path.resolve(__dirname, 'dist'), // Output folder
    clean: true, // Clean /dist before each build
  },
  mode: 'development', // Set to 'production' for final deployment
  devServer: {
    static: './dist', // Folder to serve
    open: true,       // Opens browser on run
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Use this HTML as base
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // Process .css files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
