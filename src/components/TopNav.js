import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Header, Menu, Button, Icon, Container } from 'semantic-ui-react'

class TopNav extends Component {
  render() {
    return (
      <Menu
        size="tiny"
        fixed="top"
        color="blue"
        inverted
      >
        <Container>
          <Menu.Item>
            <Header style={{ color: 'white' }}>
              Simple Blog
            </Header>
          </Menu.Item>
          <Menu.Item as={Link} to="/">
            Archive
          </Menu.Item>
          <Menu.Item position="right">
            <Button
              size="tiny"
              as={Link}
              to="/new"
              style={{ color: '#2185d0', background: '#fff' }}
            >
              <Icon name="plus" />
              New Article
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default TopNav;
