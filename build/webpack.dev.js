const merge  = require('webpack-merge')
const common = require('./webpack.base')
const path = require('path')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname,'../dist'),
    compress: true,
    port: 4567
  },
  mode: 'development',
  output: {
    filename: "js/bundle.[hash:8].js",
    path: path.join(__dirname, "../dist")
  },
})