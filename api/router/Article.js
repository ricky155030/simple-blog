const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  const {
    Article
  } = req.models

  try {
    const data = Article.toArray()
    res.json(data)
  } catch(e) {
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  const {
    Article
  } = req.models

  const {
    title,
    author,
    content
  } = req.body

  let data

  try {
    data = await Article.insert({
      title,
      author,
      content
    })

    await req.db.save()
    res.json(data.toObject())
  } catch(e) {
    next(e)
  }
})

router.put('/:id/like', async (req, res, next) => {
  const {
    Article
  } = req.models

  const {
    id
  } = req.params

  let tobe

  try {
    const asis = Article.findById(id)

    tobe = await Article.updateById(id, Object.assign({}, asis, {
      like: asis.like + 1
    }))

    await req.db.save()
    res.json(tobe.toObject())
  } catch(e) {
    next(e)
  }
})

router.get('/:id', async (req, res, next) => {
  const {
    Article
  } = req.models

  const {
    id
  } = req.params

  try {
    data = Article.findById(id)
    res.json(data.toObject())
  } catch(e) {
    next(e)
  }
})

router.put('/:id', async (req, res, next) => {
  const {
    Article
  } = req.models

  const {
    title,
    author,
    content
  } = req.body

  const {
    id
  } = req.params

  let data

  try {
    data = await Article.updateById(id, {
      title,
      author,
      content,
      updated: Date.now()
    })

    await req.db.save()
    res.json(data.toObject())
  } catch(e) {
    next(e)
  }
})

module.exports = router
