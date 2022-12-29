const path = require("path");

module.exports = {
  entry: "./src/client/app.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
  },
  // Resolve the reload issue
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  mode: "development",
};
