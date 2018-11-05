import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Button, Icon, Container } from 'semantic-ui-react'

class TopNav extends Component {
  render() {
    return (
      <Menu
        size="tiny"
        fixed="top"
      >
        <Container>
          <Menu.Item>
            <Link to="/archive">
              Archive
            </Link>
          </Menu.Item>
          <Menu.Item position="right">
            <Button
              primary
              size="tiny"
              as={Link}
              to="/new"
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
