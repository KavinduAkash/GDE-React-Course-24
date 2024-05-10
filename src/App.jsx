import './App.css'
import Header from "./components/Header.jsx";
import LoginView from "./views/LoginView.jsx";
import PostView from "./views/PostView.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import userReducer from "./redux/UserReducer.js";
function App() {

    const rootReducer = combineReducers({
        UserReducer: userReducer, // Add more reducers as needed
    });
    const store = createStore(rootReducer);

    return (
        <>
            <Provider store={store}>
            <BrowserRouter>
                <Header name={"My blog zone"}/>
                <Routes>
                    <Route path={'/'} element={<PostView/>}/>
                    <Route path={'/login'} element={<LoginView/>}/>
                </Routes>
            </BrowserRouter>
            </Provider>
        </>
    )
}

export default App
