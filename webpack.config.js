const path = require("path");
const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-mixins"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("postcss-hexrgba"),
  require("autoprefixer"),
];
module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  },
  devServer: {
    before: function (app, server) {
      server._watch("./app/**/*.html");
    },
    contentBase: path.join(__dirname, "app"), //webpack iin ajiglah yostoi folder iig zaaj ugnu
    hot: true,
    port: 3000,
    host: "localhost" /*tuhain suljeend ajilj bga uur device aas port 3000 iig ajiluulj bolno */,
  },
  mode: "development",

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader?url=false", "postcss-loader"],
      },
    ],
  },
};
