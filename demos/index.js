import express from 'express'
import http from 'http'
import path from 'path'
import winston from 'winston'

winston.level = 'debug'

module.exports = (port: number = 8080) => {
  const app = express()
  const server = http.createServer(app)

  app.set('view engine', 'pug')
  app.set('views', path.resolve(__dirname, 'views'))
  app.use('/dist', express.static(path.resolve(__dirname, 'dist')))
  app.use('/:route?', (req, res) => {
    res.render('index')
  })

  server.listen(port, () => {
    winston.log('debug', `Started on http://localhost:${port}`)
  })
}
