var Webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');

var token = Math.round(Math.random() * 1000000);

module.exports = {
  entry: {
    app: './webpack.entry.js',
    ckeditor: './webpack.ckeditor.js',
  },
  output: {
    path: './build',
    filename: '[name].js'
  },
  module: {
    loaders: [
      // Add ES2015 support
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },

      // Preprocess SCSS files to CSS
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css!resolve-url!postcss!sass!")
      },

      // Preprocess Font files
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        loader: `file?name=public/fonts/[name].[ext]?${token}`
      },

      // Preprocess Image files
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        loader: `file?name=public/img/[name].[ext]?${token}`
      },

      // Add support for JSON files
      {
        include: /\.json$/,
        loaders: ["json-loader"]
      }
    ]
  },
  plugins: [
    // Extract CSS from the JS build into a dedicated file
    new ExtractTextPlugin("[name].css", {
      allChunks: true
    }),

    // Delete all contents from build folder on build
    new CleanWebpackPlugin(['build'], {
      verbose: true,
      dry: false
    }),

    // Add support for live reload
    new LiveReloadPlugin({
      ignore: /\.js$/ // Ignore js files as we only want to livereload css
    }),

    // Add jquery due to slick issue
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
