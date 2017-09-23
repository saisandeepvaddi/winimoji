const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "renderer", "renderer.js"),
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "renderer")
  },
  devtool: "eval-source-map",
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
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "renderer", "for_webpack", "index.html")
    })
  ],
  watch: true
};
