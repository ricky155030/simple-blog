import axios from 'axios'
import parse from 'date-fns/parse'
import format from 'date-fns/format'

export const formatDate = date => format(parse(date), 'YYYY-MM-DD HH:mm:ss')

export const fetchByUrl = url => axios({
  method: 'get',
  url
})
  .then(d => d.data)

export const postByUrl = (url, data) => axios({
  method: 'post',
  url,
  data
})
  .then(d => d.data)

export const putByUrl = (url, data) => axios({
  method: 'put',
  url,
  data
})
  .then(d => d.data)

export const deleteByUrl = (url, data) => axios({
  method: 'delete',
  url,
  data
})
  .then(d => d.data)

