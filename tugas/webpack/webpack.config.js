const path = require("path");

module.exports = {
  entry: "./src/client/app.js",
  mode: "production",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};


/**
 * Bagaimana cara agar halaman dapat tetap berjalan meskipun di refresh ketika selesai di build?
 * 
 */
