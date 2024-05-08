import './App.css'
import Post from "./components/Post.jsx";
import Header from "./components/Header.jsx";

function App() {

    return (
        <>
            <Header/>
            <Post title={"Welcome"} body={"Welcome to the blog zone."}/>
            <Post title={"Lesson 01"} body={"Welcome to Lesson 01."}/>
            <Post title={"Lesson 02"} body={"Welcome to Lesson 02."}/>
            <Post title={"Lesson 03"} body={"Welcome to Lesson 03."}/>
        </>
    )
}

export default App
