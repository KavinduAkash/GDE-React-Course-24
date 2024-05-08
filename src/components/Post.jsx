/**
 * Stateful component that renders a post with a title and a paragraph.
 */

import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div>
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi commodi consequuntur culpa dicta doloremque
            eos excepturi illo, laborum non obcaecati, placeat quis quod, similique sint unde ut veniam. Laborum.</p>
      </div>
    );
  }
}

export default Post;