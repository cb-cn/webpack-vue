const path = require('path')
const merge  = require('webpack-merge')
const common = require('./webpack.base')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: "assets/src/js/bundle.[contenthash:8].js",
    path: path.join(__dirname, "../dist")
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
})