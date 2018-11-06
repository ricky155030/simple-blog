import { connect } from 'react-redux'
import ArticleList from '../components/ArticleList'
import { getArticles, deleteArticle, likeArticle } from '../actions/article'

const mapStateToProps = (state) => ({
  articles: state.article.all
})

const container = connect(mapStateToProps, {
  getArticles,
  likeArticle,
  deleteArticle
})(ArticleList)

export default container
