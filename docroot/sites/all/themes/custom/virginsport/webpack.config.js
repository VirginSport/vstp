var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: './webpack.entry.js',
  output: {
    path: './build',
    filename: 'app.js'
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
        loader: 'file?name=public/fonts/[name].[ext]'
      },

      // Preprocess Image files
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        loader: 'file?name=public/img/[name].[ext]'
      }
    ]
  },
  plugins: [
    // Extract CSS from the JS build into a dedicated file
    new ExtractTextPlugin("app.css", {
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
    })
  ]
};
