module.exports = {
  output: {
    /**
     * hot热替换模式不支持chunkhash
     */
    sourceMapFilename: '[name].map',
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};
