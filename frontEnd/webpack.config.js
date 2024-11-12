const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer:{
      port: 8081
    },
    plugins: [
      //Module federation plugin
      new ModuleFederationPlugin({
        name:'frontEnd',
        filename:'remoteEntry.js',
        exposes:{
          //this will expose index.js from front-end
          './FrontEndIndex':'./src/index'
        },
      }),
      new HtmlWebpackPlugin({
          template: './public/index.html'
      })
  ]
  };