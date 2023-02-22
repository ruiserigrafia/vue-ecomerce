const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/index.js",
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
