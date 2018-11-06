import { get } from 'lodash'
import { connect } from 'react-redux'
import Article from '../components/Article'
import { deleteArticle, likeArticle, getArticleById } from '../actions/article'

const mapStateToProps = (state, props) => {
  const id = get(props, 'match.params.id')

  return {
    article: state.article.all[id]
  }
}

const container = connect(mapStateToProps, {
  likeArticle,
  deleteArticle,
  getArticleById
})(Article)

export default container
