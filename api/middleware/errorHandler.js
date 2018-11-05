module.exports = (err, req, res, next) => {
  const result = {
    status: 'error',
    name: err.name,
    message: err.message
  }

  res.status(500).json(result)
}
