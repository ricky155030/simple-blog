import { get } from 'lodash'
import React, { Component } from 'react';
import { Icon, Header, Divider, Button, Form } from 'semantic-ui-react'

class NewArticle extends Component {
  state = {
    id: '',
    type: 'New',
    title: '',
    author: '',
    content: ''
  }

  componentDidMount = async () => {
    const id = get(this.props, 'match.params.id')

    if(id) {
      const data = await this.props.getArticleById(id)

      this.setState({
        id: data._id,
        type: 'Edit',
        title: data.title,
        author: data.author,
        content: data.content,
      })
    }
  }

  handleTitleChange = e => this.setState({ title: e.target.value })

  handleAuthorChange = e => this.setState({ author: e.target.value })

  handleContentChange = e => this.setState({ content: e.target.value })

  handleSubmit = async () => {
    const {
      title,
      author,
      content
    } = this.state

    let id

    if(this.state.id) {
      id = this.state.id

      await this.props.editArticle({
        id,
        title,
        author,
        content
      })
    } else {
      id = await this.props.createArticle({
        title,
        author,
        content
      })
    }

    this.props.history.push(`/article/${id}`)
  }

  render() {
    const {
      type,
      title,
      author,
      content
    } = this.state

    return (
      <div>
        <Header color="grey">
          <Icon.Group className="m-r-10" size="large">
            <Icon name="file" />
            <Icon corner name="plus" />
          </Icon.Group>
          { type } Article
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
              error={!author}
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
            disabled={!title || !author}
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default NewArticle;
