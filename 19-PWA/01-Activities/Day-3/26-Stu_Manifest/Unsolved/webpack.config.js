const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./assets/js/index.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "TODOs List",
      }),

      new GenerateSW(),
      new WebpackPwaManifest({
        // TODO: Create a manifest.json:
        name: "TODOs List App", // Your app's name
        short_name: "TODOs", // Short name for the home screen icon
        description: "A simple TODOs list application",
        background_color: "#ffffff", // Background color of the splash screen
        theme_color: "#007bff", // Theme color used for the app's UI
        start_url: "/", // The starting URL when the app is launched
        display: "standalone", // Display mode (e.g., standalone, fullscreen, browser)
        icons: [
          {
            src: path.resolve("src/assets/icon.png"), // Path to your app's icon
            sizes: [96, 128, 192, 256, 384, 512], // Icon sizes for different devices
          },
        ],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/transform-runtime",
              ],
            },
          },
        },
      ],
    },
  };
};
