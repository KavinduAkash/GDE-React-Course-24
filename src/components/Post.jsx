/**
 * Stateful component that renders a post with a title and a paragraph.
 */

import React from 'react';

const title = "My first post";
const body = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi commodi consequuntur culpa dicta " +
    "doloremque eos excepturi illo, laborum non obcaecati, placeat quis quod, similique sint unde ut veniam. Laborum.";

class Post extends React.Component {
  render() {
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;