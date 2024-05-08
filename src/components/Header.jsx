/*
* Stateless component for the header
* */
function Header(props) {
    return (
        <header>
            <h1>{props.name}</h1>

            <input type="text" placeholder="Search post"/>
            <button>Search</button>

            <nav>
                <ul>
                    <li><a href="/">Posts</a></li>
                    <li><a href="/new">New</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;