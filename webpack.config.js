const fs = require('fs')
const webpack = require('webpack')
require('webpack-dev-middleware')
require('webpack-hot-middleware')

const defaultBabelConfig = JSON.parse(fs.readFileSync('.babelrc', {encoding: 'utf8'}))

// webpack 2 resolves es2015 imports
const presets = [
  ['es2015', {modules: false}]
].concat(defaultBabelConfig.presets.filter(v => v !== 'es2015'))

const babelConfig = Object.assign({}, defaultBabelConfig, {babelrc: false, presets})

module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: babelConfig
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ]
}
