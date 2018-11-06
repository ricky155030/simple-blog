import React, { Component } from 'react';
import { Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class TopNav extends Component {
  render() {
    return (
      <Message negative>
        <Message.Header>Page Not Found</Message.Header>
        <Message.Content>
          <br />
          <Link to="/">
            Back to article list
          </Link>
        </Message.Content>
      </Message>
    );
  }
}

export default TopNav;
