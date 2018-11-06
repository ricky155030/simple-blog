import React from 'react';
import { Link } from 'react-router-dom'
import { Item, Icon, Button } from 'semantic-ui-react'
import Like from './Like'
import { formatDate } from '../utils'

const ArticleListItem = props => {
  const {
    _id,
    like,
    created,
    title,
    author,
    preview
  } = props.article

  return (
    <Item>
      <Item.Content>
        <Item.Header>
          <Link to={`/article/${_id}`}>
            { title }
          </Link>
        </Item.Header>
        <Item.Meta>
          <span>
            <Icon name="time" />
            { formatDate(created) }
          </span>
          <span>
            <Icon name="user" />
            { author }
          </span>
        </Item.Meta>
        <br />
        <Item.Description>
          { preview }
        </Item.Description>
        <Item.Extra>
          <Link to={`/article/${_id}`}>
            Read more
          </Link>
        </Item.Extra>
        <Item.Extra>
          <Like count={like} />
          <Button size="tiny" negative floated="right" onClick={() => props.deleteArticle(_id)}>
            <Icon name="remove" />
            Delete
          </Button>
          <Button size="tiny" floated="right" onClick={() => props.editArticle(_id)}>
            <Icon name="edit" />
            Edit
          </Button>
          <Button size="tiny" floated="right" onClick={() => props.likeArticle(_id)}>
            <Icon name="like" />
            Like this post
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}

export default ArticleListItem;
