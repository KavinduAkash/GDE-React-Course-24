import './App.css'
import Post from "./components/Post.jsx";
import Header from "./components/Header.jsx";

// posts array
const posts = [
    {title: "Welcome", body: "Welcome to the blog zone."},
    {title: "Lesson 01", body: "Welcome to Lesson 01."},
    {title: "Lesson 02", body: "Welcome to Lesson 02."},
    {title: "Lesson 03", body: "Welcome to Lesson 03."}
]

function App() {

    return (
        <>
            <Header name={"My blog zone"}/>
            {
                posts.map((post, index) => (
                    <Post key={index} title={post.title} body={post.body}/>
                ))
            }
        </>
    )
}

export default App
