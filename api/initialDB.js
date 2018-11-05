const fs = require('fs')
const { DB_PATH } = require('../config.js')

// Create DB if not exist
if(!fs.existsSync(DB_PATH)) {
  fs.writeFileSync(DB_PATH, '{}', { encoding: 'utf8' })
}

const Database = require('warehouse')
const db = new Database({
  path: DB_PATH
})

const ArticleSchema = require('./model/Article')
const Article = db.model('article', ArticleSchema)

const models = {
  Article
}

module.exports = {
  db,
  models
}
