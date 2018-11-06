import { connect } from 'react-redux'
import NewArticle from '../components/NewArticle'
import { editArticle, createArticle, getArticleById } from '../actions/article'

const mapStateToProps = (state) => ({
})

const container = connect(mapStateToProps, {
  createArticle,
  editArticle,
  getArticleById
})(NewArticle)

export default container
