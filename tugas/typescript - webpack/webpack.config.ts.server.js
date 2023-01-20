const path = require("path");

module.exports = {
  target: "node",
  entry: "./build/index.js",
  resolve: {
    extensions: [".js"],
  },
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
};
