import './App.css'
import Header from "./components/Header.jsx";
import LoginView from "./views/LoginView.jsx";
import PostView from "./views/PostView.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {combineReducers, createStore, applyMiddleware} from "redux";
import userReducer from "./redux/UserReducer.js";
import {thunk} from "redux-thunk";
function App() {

    const rootReducer = combineReducers({
        userReducer: userReducer, // Add more reducers as needed
    });
    let middleware = applyMiddleware(thunk);
    const store = createStore(rootReducer, middleware);

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
