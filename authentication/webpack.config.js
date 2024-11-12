const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer:{
      port: 8082
    },
    plugins: [
      //Module federation plugin
      new ModuleFederationPlugin({
        name:'authentication',
        filename:'remoteEntry.js',
        exposes:{
          //this will expose index.js from front-end
          './AuthenticationIndex':'./src/index'
        },
      }),
      new HtmlWebpackPlugin({
          template: './public/index.html'
      })
  ]
  };