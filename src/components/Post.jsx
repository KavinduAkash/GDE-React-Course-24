/**
 * Stateful component that renders a post with a title and a paragraph.
 */

import React from 'react';
import "../assets/styles/post.css";
import {Button} from "react-bootstrap";

class Post extends React.Component {
    state = {
        like: 0
    }

    like = () => {
        this.setState({like: this.state.like + 1})
    }

    render() {
        return (
            <div className={"post"}>
                {
                    this.props.loading ? <h1>Loading...</h1> :
                        <div>
                            <h1>{this.props.title}</h1>
                            <p>{this.props.body}</p>
                            <div>
                                <Button variant="outline-primary" onClick={this.like}>{this.state.like} Like</Button>
                            </div>

                        </div>
                }
            </div>
        );
    }
}

export default Post;