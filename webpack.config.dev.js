var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

//Accedemos a la variable de entorno PATH_SERVER 
var path_server =(process.env.PATH_SERVER == undefined ? 'localhost' : process.env.PATH_SERVER);
console.log(path_server);

//Se construye la url para acceder a las opciones internas de los motores de accord.
const ROOT_URI = 'http://' + path_server + ':8080'; // No end '/' please

module.exports = {
  entry: {
    client: [
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      { from: 'static', to: 'static' }
    ]),
    new webpack.DefinePlugin({
      ROOT_URI: JSON.stringify(ROOT_URI),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, 'src')],
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        include: [/node_modules/],
        use: ['shebang-loader']
      },
      {
        test: /\.(ne|cta)$/,
        use:['raw-loader']
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },    
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'src/loaders/')],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};