import { chain } from 'lodash'
import { fetchByUrl, postByUrl, putByUrl, deleteByUrl } from '../utils'

export const getArticles = () => async dispatch => {
  const url = `/api/article`
  const result = chain(await fetchByUrl(url))
    .keyBy('_id')
    .value()

  dispatch(receiveArticles(result))
}

export const getArticleById = id => async dispatch => {
  const url = `/api/article/${id}`
  const result = chain(await fetchByUrl(url))
    .castArray()
    .keyBy('_id')
    .value()

  dispatch(receiveArticles(result))

  return result[id]
}

export const likeArticle = id => async dispatch => {
  const url = `/api/article/${id}/like`
  const result = chain(await putByUrl(url))
    .castArray()
    .keyBy('_id')
    .value()

  dispatch(receiveArticles(result))
}

export const deleteArticle = id => async dispatch => {
  const url = `/api/article/${id}`
  await deleteByUrl(url)

  dispatch(removeArticle(id))
}

export const createArticle = data => async dispatch => {
  const url = `/api/article`
  const result = chain(await postByUrl(url, data))
    .castArray()
    .keyBy('_id')
    .value()

  const id = chain(result)
    .values()
    .head()
    .get('_id')
    .value()

  dispatch(receiveArticles(result))

  return id
}

export const editArticle = data => async dispatch => {
  const url = `/api/article/${data.id}`
  const result = chain(await putByUrl(url, data))
    .castArray()
    .keyBy('_id')
    .value()

  dispatch(receiveArticles(result))
}

const receiveArticles = data => ({
  type: 'RECEIVE_ARTICLES',
  data
})

const removeArticle = id => ({
  type: 'REMOVE_ARTICLE',
  id
})
