import React from 'react';
import { Link } from 'react-router-dom'
import { Item, Icon } from 'semantic-ui-react'
import Like from './Like'

const ArticleListItem = props => {
  const {
    id,
    like,
    date,
    title,
    author,
    preview
  } = props.article

  return (
    <Item size="tiny">
      <Item.Content>
        <Item.Header as='a'>
          { title }
        </Item.Header>
        <Item.Meta>
          <span className="m-r-10">
            { date }
          </span>
          <Like count={like} onLike={() => props.likeArticle(id)}/>
          <span className="m-r-10">
            <Icon name="user" />
            { author }
          </span>
        </Item.Meta>
        <br />
        <Item.Description>
          { preview }
        </Item.Description>
        <Item.Extra>
          <Link to={`/article/${id}`}>
            Read more
          </Link>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}

export default ArticleListItem;
