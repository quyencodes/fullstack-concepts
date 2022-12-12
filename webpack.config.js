import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import dotenv from 'dotenv'

export default {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  target: 'web',
  // Signifies entry point of the application
  entry: './src/index.jsx',
  output: {
    // Cwd is a method of the global object process, returns a string value which is the current working directory of the Node.js process.
    // https://stackoverflow.com/questions/9874382/whats-the-difference-between-process-cwd-vs-dirname
    path: path.resolve(process.cwd(), 'dist'),
  },
  module: {
    rules: [
      {
        // The test property identifies which file or files should be transformed.
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        // The use property indicates which loader should be used to do the transforming.
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              transform: {
                react: { runtime: 'automatic' },
              },
              parser: { jsx: true },
            },
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'src/index.html'),
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
}
