module.exports = {
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre'
      }
    ]
  }
}
