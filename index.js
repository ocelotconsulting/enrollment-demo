const fs = require('fs')
const express = require('express')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const open = require('open')

const app = express()

app.use('/images', express.static('images'))

const compiler = webpack(webpackConfig)

app.use(devMiddleware(compiler, {
  stats: {
    colors: true
  },
  noInfo: true
}))
app.use(hotMiddleware(compiler))

const port = parseInt(process.env.PORT, 10) || 3000

const html = fs.readFileSync('index.html', {encoding: 'utf8'})

app.get('/*', (req, res) => res.send(html))

app.use('/', (error, req, res, next) => {
  if (error) {
    console.error(error)
    res.status(500).json(error)
  } else {
    next()
  }
})

app.listen(port, () => {
  console.log(`running: http://localhost:${port}`)
  open(`http://localhost:${port}`)
})

