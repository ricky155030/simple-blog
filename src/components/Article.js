import { get } from 'lodash'
import React, { Component } from 'react';
import { Icon, Button, Segment, Divider, Header } from 'semantic-ui-react';
import Like from './Like'
import styled from 'styled-components'
import { formatDate } from '../utils'

const PaddedSegment = styled(Segment)`
  padding: 30px !important;
  white-space: pre-wrap;
`

class Article extends Component {
  state = {
    loading: false
  }

  componentDidMount = async () => {
    const id = get(this.props, 'match.params.id')
    await this.props.getArticleById(id)
  }

  handleDeleteArticle = async () => {
    const {
      _id,
    } = this.props.article

    await this.props.deleteArticle(_id)
    this.props.history.push(`/`)
  }

  handleRouteToEdit = () => {
    const {
      _id,
    } = this.props.article

    this.props.history.push(`/edit/${_id}`)
  }

  render() {
    const {
      loading
    } = this.state

    if(loading) {
      return null
    }

    const {
      _id,
      title,
      like,
      created,
      content,
      author
    } = this.props.article || {}

    return (
      <PaddedSegment color="blue"> 
        <Header>{ title }</Header>
        <div className="inline m-r-10">
          <Like count={like} />
        </div>
        <div className="inline m-r-10">
          <Icon name="user" />
          { author }
        </div>
        <div className="inline m-r-10">
          <Icon name="time" />
          { formatDate(created) }
        </div>
        <Divider />
        { content }
        <Divider hidden />
        <Button size="tiny" negative floated="right" onClick={this.handleDeleteArticle}>
          <Icon name="remove" />
          Delete
        </Button>
        <Button size="tiny" floated="right" onClick={this.handleRouteToEdit}>
          <Icon name="edit" />
          Edit
        </Button>
        <Button size="tiny" floated="right" onClick={() => this.props.likeArticle(_id)}>
          <Icon name="like" />
          Like this post
        </Button>
        <Divider clearing hidden />
      </PaddedSegment>
    )
  }
}

export default Article;
