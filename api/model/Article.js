const { truncate } = require('lodash')
const { Schema } = require('warehouse');

const Article = new Schema();

Article.add({
  title: {
    type: String,
    required: true
  },
  like: {
    type: Number,
    default: 0
  },
  author: {
    type: String,
    required: true,
    default: 'Unknown'
  },
  content: {
    type: String,
    default: ''
  },
  updated: {
    type: Date,
    default: Date.now()
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

Article.virtual('preview').get(function() {
  return truncate(this.content, {
    length: 100
  })
})

module.exports = Article
