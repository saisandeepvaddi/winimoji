const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "renderer", "renderer.js"),
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "renderer")
  },
  // devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        // include: [path.resolve(__dirname, "renderer")],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react", "stage-3"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  node: {
    __dirname: true,
    __filename: true
  },
  target: "electron-renderer",
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "common"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new UglifyJSPlugin({
      parallel: true
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "renderer", "for_webpack", "index.html")
    })
  ]
};
