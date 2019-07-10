const path = require('path')
const {VueLoaderPlugin} = require("vue-loader")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, "../src/js/index.js"),
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: function(){
                if (process.env.NODE_ENV === 'development') {
                  return '[path][name].[hash:8].[ext]';
                }
                return '[path][hash:8].[ext]';
              },
              outputPath: 'assets'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      inject: "body",
      template: "src/index.html",
      filename: "index.html"
    })
  ]
}