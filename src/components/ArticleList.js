import React, { Component } from 'react';
import { chain } from 'lodash';
import { Divider, Item, Placeholder } from 'semantic-ui-react'

import ArticleListItem from './ArticleListItem'
import SortBy from './SortBy'

class ArticleList extends Component {
  state = {
    loading: false,
    sortBy: 'like',
    order: 'desc'
  }

  componentDidMount = async () => {
    this.setState({
      loading: true
    })

    await this.props.getArticles()

    this.setState({
      loading: false
    })
  }

  handleSortChange = rule => {
    const {
      order,
      sortBy
    } = rule

    this.setState({ 
      order,
      sortBy
    })
  }

  handleRouteToEdit = id => {
    this.props.history.push(`/edit/${id}`)
  }

  render() {
    const {
      order,
      sortBy,
      loading
    } = this.state

    const {
      articles
    } = this.props

    if(loading) {
      return (
        <Placeholder fluid>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder>
      )
    }

    const sortedArticle = chain(articles)
      .values()
      .orderBy(sortBy, order)
      .value()

    return (
      <div>
        <SortBy 
          order={order}
          sortBy={sortBy}
          onChange={this.handleSortChange}
        />
        <Divider />
        <Item.Group relaxed="very" divided>
          { 
            chain(sortedArticle)
              .map(d => (
                <ArticleListItem 
                  key={d._id} 
                  article={d} 
                  editArticle={this.handleRouteToEdit}
                  likeArticle={this.props.likeArticle}
                  deleteArticle={this.props.deleteArticle}
                />
              )) 
              .value()
          }
        </Item.Group>
      </div>
    );
  }
}

export default ArticleList;
