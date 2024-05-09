import './App.css'
import Header from "./components/Header.jsx";
import LoginView from "./views/LoginView.jsx";
import PostView from "./views/PostView.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

    return (
        <>
            <BrowserRouter>
                <Header name={"My blog zone"}/>
                <Routes>
                    <Route path={'/'} element={<PostView/>}/>
                    <Route path={'/login'} element={<LoginView/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
