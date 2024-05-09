/*
* Stateless component for the header
* */
import SearchBar from "./SearchBar.jsx";
import NavBar from "./NavBar.jsx";

function Header(props) {
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
        </header>
    );
}

export default Header;