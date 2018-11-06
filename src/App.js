import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import TopNav from './components/TopNav'
import NotFound from './components/NotFound'
import ContentContainer from './components/ContentContainer'
import ArticleList from './containers/ArticleListContainer'
import NewArticle from './containers/NewArticleContainer'
import Article from './containers/ArticleContainer'

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
          <Switch>
            <Route exact path="/" component={ArticleList} />
            <Route path="/new" component={NewArticle} />
            <Route key="edit" path="/edit/:id" component={NewArticle} />
            <Route key="new" path="/article/:id" component={Article} />
            <Route component={NotFound} />
          </Switch>
        </ContentContainer>
      </div>
    );
  }
}

export default App;
