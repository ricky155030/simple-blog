import React from 'react';
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const InlineDiv = styled.div`
  display: inline-block;
`

const Like = props => {
  return (
    <div className="color-like inline">
      <span className="m-r-5">
        <Icon name="like" onClick={props.onLike} />
      </span>
      <span>
        { props.count }
      </span>
    </div>
  );
}

export default Like;
