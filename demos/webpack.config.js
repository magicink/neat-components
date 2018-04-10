const path = require('path')

module.exports = {
  entry: `${path.resolve(__dirname, '..', 'src', 'Demos', 'index.js')}`,
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']}
    ]
  },
  output: {
    filename: 'bundle.js',
    path: `${path.resolve(__dirname, 'dist')}`
  }
}