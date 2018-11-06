import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './configureStore'

import './index.css';
import 'semantic-ui-css/semantic.min.css';

const store = configureStore()

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App /> 
    </Provider>
  </Router>,
  document.getElementById('root')
);
