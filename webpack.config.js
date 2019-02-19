const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProduction = env === 'production';
  //const CSSExtract = new ExtractTextPlugin('styles.css');
  console.log('env', env);
  return {
    entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.less$/,
        use: [
           isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'less-loader'
        ]
    }]
  },
  plugins: isProduction ? [ new MiniCssExtractPlugin()] : [],
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
    }
  }
};