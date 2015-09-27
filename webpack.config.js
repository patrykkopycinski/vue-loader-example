var vue = require('vue-loader')

module.exports = {
  entry: "./src/main.js",
  output: {
    path: "./build",
    filename: "build.js"
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.vue$/,
        loader: vue.withLoaders({
          // apply babel transform to all javascript
          // inside *.vue files.
          js: 'babel?optional[]=runtime'
        })
      }
    ]
  },
  devtool: 'source-map',
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
