const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "renderer", "renderer.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "renderer")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        include: [path.resolve(__dirname, "renderer")],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "es2015", "stage-2", "react"]
          }
        }
      }
    ]
  },
  node: {
    __dirname: true,
    __filename: true
  },
  target: "electron-renderer",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "renderer", "dummy.html")
    })
  ],
  watch: true
};
