const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

// Routers
const Article = require('./api/router/Article')

// Middlewares
const errorHandler = require('./api/middleware/errorHandler')

const {
  db,
  models
} = require('./api/initialDB')

app.use(bodyParser.json());

(async () => {
  await db.load()

  // inject db model
  app.use((req, res, next) => {
    req.db = db
    req.models = models
    next()
  })

  app.use('/api/article', Article)
  app.use('/static', express.static(path.join(__dirname + '/build/static')))
  app.use('*', (req, res) => res.sendFile(path.join(__dirname + '/build/index.html')))

  app.use(errorHandler)
})()


app.listen(3001)
