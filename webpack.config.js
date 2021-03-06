const fs = require('fs')
const webpack = require('webpack')
require('webpack-dev-middleware')
require('webpack-hot-middleware')

const defaultBabelConfig = JSON.parse(fs.readFileSync('.babelrc', {encoding: 'utf8'}))

const rules = (() => {
  // webpack 2 resolves es2015 imports
  const presets = [
    ['es2015', {modules: false}]
  ].concat(defaultBabelConfig.presets.filter(v => v !== 'es2015'))

  const result = [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: Object.assign({}, defaultBabelConfig, {babelrc: false, presets})
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.scss/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  ]

  const resources = {
    eot: 'vnd.ms-fontobject',
    ttf: 'application/font-sfnt',
    woff: 'application/font-woff',
    woff2: 'application/font-woff2',
    svg: 'image/svg+xml',
    jpg: 'image/jpg',
    png: 'image/png',
    gif: 'image/gif'
  }

  // anything smaller than 50K will be embedded as url(data:...)
  // larger files will be emitted
  const addUrlLoader = (extension, mimeType) => {
    result.push({
      test: new RegExp(`\\.${extension}$`),
      loader: 'url-loader',
      query: {
        mimetype: mimeType,
        limit: 50000,
        name: '[name].[ext]'
      }
    })
  }

  for (let extension in resources) {
    addUrlLoader(extension, resources[extension])
  }

  return result
})()

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
  module: {rules},
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
