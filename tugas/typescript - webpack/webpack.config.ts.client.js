const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './build/app.js',
  mode: 'production',
  target: "web",
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist', 'public'),
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      filename: path.resolve(__dirname, "dist", "public", "index.html"),
    }),
  ],
};