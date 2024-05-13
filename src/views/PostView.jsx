import withLoadingIndicator from "../components/hoc/withLoadingIndicator.jsx";
import Post from "../components/Post.jsx";
import {useEffect, useState} from "react";
import Axios from "axios";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

// posts array
// const posts = [
//     {title: "Welcome", body: "Welcome to the blog zone."},
//     {title: "Lesson 01", body: "Welcome to Lesson 01."},
//     {title: "Lesson 02", body: "Welcome to Lesson 02."},
//     {title: "Lesson 03", body: "Welcome to Lesson 03."}
// ]

function PostView() {

    const navigate = useNavigate();
    const user = useSelector(state => state.userReducer.user);
    const[posts, setPosts] = useState([]);

    useEffect(() => {
        alert("Please login to view blog posts");
        if(!user) {
            navigate("/login");
        }
    }, [])
    const getAllPosts = () => {

        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         setPosts(json)
        //     });

        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data)
            }).catch(error => {
                alert(error.toString());
            });
    }

    useEffect(() => {
        getAllPosts()
    }, [])

    return(
        <div>
            {
                posts.map((post, index) => {
                    let WithLoadingIndicator = withLoadingIndicator(Post);
                    return <WithLoadingIndicator key={index} title={post.title} body={post.body}/>
                })
            }
        </div>
    )
}

export default PostView;