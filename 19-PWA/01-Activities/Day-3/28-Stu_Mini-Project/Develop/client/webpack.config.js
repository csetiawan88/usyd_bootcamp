const path = require("path");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
      cards: "./src/js/cards.js",
    },

    // TODO: Add the correct output
    output: {
      // Specify the output directory and filename pattern
      filename: "[name].bundle.js", // [name] will be replaced with 'main', 'install', or 'cards'
      path: path.resolve(__dirname, "dist"),
    },

    // TODO: Add the correct plugins
    plugins: [
      // Add any necessary plugins here
    ],

    // TODO: Add the correct modules
    module: {
      rules: [
        {
          test: /\.js$/, // Apply the loader to .js files
          exclude: /node_modules/, // Exclude node_modules directory
          use: {
            loader: "babel-loader", // Use Babel loader for transpilation
            options: {
              presets: ["@babel/preset-env"], // Preset for modern JavaScript
            },
          },
        },
        // Add more rules for other file types (e.g., CSS, images) if needed
      ],
    },
  };
};
