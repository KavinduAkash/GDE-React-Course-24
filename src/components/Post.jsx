/**
 * Stateful component that renders a post with a title and a paragraph.
 */

import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Post;