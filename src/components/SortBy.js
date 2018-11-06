import React, { Component } from 'react';
import { Icon, Breadcrumb } from 'semantic-ui-react'

const DEFINITION = [
  {
    name: 'Like',
    value: 'like'
  },
  {
    isDivider: true
  },
  {
    name: 'Author',
    value: 'author'
  },
  {
    isDivider: true
  },
  {
    name: 'Publish Date',
    value: 'created'
  }
]

const SORT_ICON_MAPPING = {
  'asc': 'up',
  'desc': 'down'
}

class SortBy extends Component {
  handleClick = (e, node) => {
    const {
      order,
      sortBy
    } = this.props

    if(sortBy === node.value) {
      this.props.onChange({ 
        order: order === 'desc' ? 'asc' : 'desc',
        sortBy
      })
    } else {
      this.props.onChange({ 
        order,
        sortBy: node.value 
      })
    }
  }

  render() {
    const {
      order,
      sortBy
    } = this.props

    const OrderComponent = <Icon name={`sort amount ${SORT_ICON_MAPPING[order]}`} />

    return (
      <div className="no-select">
        <b className="m-r-10">Sort By</b>
        <Breadcrumb>
          {
            DEFINITION.map((opt, index) => {
              if(opt.isDivider) {
                return <Breadcrumb.Divider key={index} content=" | " />
              }

              return (
                <Breadcrumb.Section 
                  key={index} 
                  link
                  onClick={this.handleClick}
                  active={sortBy === opt.value}
                  value={opt.value}
                >
                  { sortBy === opt.value && OrderComponent }
                  { opt.name }
                </Breadcrumb.Section>
              )
            })
          }
        </Breadcrumb>
      </div>
    );
  }
}

SortBy.defaultProps = {
  onChange: () => {}
}

export default SortBy;
