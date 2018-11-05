const { Schema } = require('warehouse');
const { getTime } = require('date-fns/get_time')

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

module.exports = Article
