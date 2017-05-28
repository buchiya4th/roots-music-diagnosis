var webpack = require("webpack");

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/app/js',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  vue: {
    loaders: {
      scss: 'vue-style!css!sass'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ]
}
