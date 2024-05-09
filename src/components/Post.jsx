/**
 * Stateful component that renders a post with a title and a paragraph.
 */

import React from 'react';

class Post extends React.Component {
    state = {
        like: 0
    }

    like = () => {
        this.setState({like: this.state.like + 1})
    }

    render() {
        return (
            <div>
                {
                    this.props.loading ? <h1>Loading...</h1> :
                        <div>
                            <h1>{this.props.title}</h1>
                            <p>{this.props.body}</p>
                            <div>
                                <span>{this.state.like}</span>
                                <button onClick={this.like}>Like</button>
                            </div>

                        </div>
                }
            </div>
        );
    }
}

export default Post;