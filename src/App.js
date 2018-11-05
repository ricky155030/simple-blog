import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import TopNav from './components/TopNav'
import ContentContainer from './components/ContentContainer'
import ArticleList from './components/ArticleList'
import NewArticle from './components/NewArticle'

/*
 * 文章列表
 * 文章本體
 * 文章編輯
 */

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <ContentContainer>
          <Route path="/archive" component={ArticleList} />
          <Route path="/new" component={NewArticle} />
        </ContentContainer>
      </div>
    );
  }
}

export default App;
