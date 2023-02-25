const path = require("path");
const { VueLoaderPlugin, default: loader } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/index.js",
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "Ecomerce",
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./css/index.min.css",
    }),
  ],
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
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|webp|svg|woff|woff2|ttf|eot)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/i,
              name: "img/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};

chainWebpack: (config) => {
  config.module
    .rule("vue")
    .use("vue-loader")
    .tap((options) => ({
      ...options,
      compilerOptions: {
        // trata qualquer tag que comece com ion- como elementos customizados
        isCustomElement: (tag) => tag.startsWith("ion-"),
      },
    }));
};
