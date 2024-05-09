import './App.css'
import Header from "./components/Header.jsx";
import LoginView from "./views/LoginView.jsx";
import PostView from "./views/PostView.jsx";

function App() {

    return (
        <>
            <Header name={"My blog zone"}/>
            <LoginView/>
            <PostView/>
        </>
    )
}

export default App
