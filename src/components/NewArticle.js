import React, { Component } from 'react';
import { Icon, Header, Divider, Input, Button, Form, TextArea } from 'semantic-ui-react'

class NewArticle extends Component {
  state = {
    title: '',
    author: '',
    content: ''
  }

  handleTitleChange = e => this.setState({ title: e.target.value })

  handleAuthorChange = e => this.setState({ author: e.target.value })

  handleContentChange = e => this.setState({ content: e.target.value })

  render() {
    const {
      title,
      author,
      content
    } = this.state

    return (
      <div>
        <Header>
          <Icon.Group className="m-r-10" size="large">
            <Icon name="file" />
            <Icon corner name="plus" />
          </Icon.Group>
          New Article
        </Header>
        <Divider />
        <Form>
          <Form.Group widths="equal">
            <Form.Input 
              fluid 
              error={!title}
              label="Title"
              value={title}
              placeholder="Your title" 
              onChange={this.handleTitleChange}
            />
            <Form.Input 
              fluid 
              label="Author"
              value={author}
              placeholder="Who are you?" 
              onChange={this.handleAuthorChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.TextArea 
              label="Content"
              rows={20} 
              value={content}
              placeholder="Write something here" 
              onChange={this.handleContentChange}
            />
          </Form.Group>
          <Button 
            size="tiny" 
            floated="right"
            disabled={!title}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default NewArticle;
