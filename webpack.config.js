var path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    voltage: './src/assets/scripts/voltage.js',
  },
  output: {
    path: path.resolve(__dirname, './src/temp/scripts'),
    filename: '[name].min.js'
  },
  module:{
    rules:[
      {
        use: {
          loader: 'babel-loader',
        },
        test:/\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
