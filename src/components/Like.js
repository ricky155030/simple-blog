import React from 'react';
import { Icon } from 'semantic-ui-react'

const Like = props => {
  return (
    <div className="like-count inline">
      <span className="m-r-5">
        <Icon name="like" />
      </span>
      <span>
        { props.count }
      </span>
    </div>
  );
}

export default Like;
