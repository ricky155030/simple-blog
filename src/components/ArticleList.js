import React, { Component } from 'react';
import { chain } from 'lodash';
import { Divider, Item, Dropdown } from 'semantic-ui-react'

import ArticleListItem from './ArticleListItem'
import SortBy from './SortBy'

const fake = [
  {
    id: '1asdadqwe',
    like: 3021,
    title: '你今天 Xdddddddd 了嗎－2：基本功能介紹',
    date: '2018-01-01',
    author: 'HWKAO',
    preview: '在這篇文當中，會分享一些在 Xd 中非常好用的功能。不過這邊還是要重申，雖然 Xd 在繪製物件與排版的功能不及 Sketch，但在製作…'
  },
  {
    id: 'aksdjakd',
    like: 233,
    title: '你今天 Xddddddddd 了嗎？- 2：Adobe Xd 簡介',
    date: '2018-01-02',
    author: 'HWKAO',
    preview: '去年三月時，Adobe 公司發表了一套最新的設計軟體：Adobe Xd，使用中文的朋友一定會對其中的 Xd 感到印象深刻，但這是套非常認真的軟體，全名叫做 Adobe Experience…'
  },
]

class ArticleList extends Component {
  state = {
    sortBy: 'like',
    order: 'desc',
    data: fake
  }

  componentDidMount() {
    const {
      order,
      sortBy
    } = this.state

    this.sortArticle({
      order,
      sortBy
    })
  }

  sortArticle = rule => {
    const {
      order,
      sortBy
    } = rule

    const {
      data
    } = this.state

    const sortedArticle = chain(data)
      .orderBy(sortBy, order)
      .value()

    this.setState({ 
      order,
      sortBy,
      data: sortedArticle 
    })
  }

  render() {
    const {
      data,
      order,
      sortBy
    } = this.state

    return (
      <div>
        <SortBy 
          order={order}
          sortBy={sortBy}
          onChange={this.sortArticle}
        />
        <Divider />
        <Item.Group relaxed="very" divided>
          { data.map(d => <ArticleListItem article={d} likeArticle={id => console.log(`I like article ${id}`)}/>) }
        </Item.Group>
      </div>
    );
  }
}

export default ArticleList;
