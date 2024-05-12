/*
* Stateless component for the header
* */
import SearchBar from "./SearchBar.jsx";
import NavBar from "./NavBar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import {logoutUser} from "../redux/UserActions.js";

function Header(props) {

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const user = useSelector(state => state.userReducer.user);

    console.log(user);

    const logout = () => {
        dispatch(logoutUser(null));
        navigate("/login");
    }

    return (
        <header id={"header"}>
            <h1>{props.name}</h1>

            {/*<input type="text" placeholder="Search post"/>*/}
            {/*<button>Search</button>*/}

            <SearchBar/>

            {/*<nav>*/}
            {/*    <ul>*/}
            {/*        <li><a href="/">Posts</a></li>*/}
            {/*        <li><a href="/new">New</a></li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}

            <NavBar/>

            <div id={"header-user"}>

                {
                    user ? <div>Welcome {user.email} | <Button variant="outline-danger" onClick={logout}>Logout</Button></div> : <div><Button variant="outline-primary" onClick={() => navigate("/login")}>Login</Button></div>
                }
            </div>
        </header>
    );
}

export default Header;