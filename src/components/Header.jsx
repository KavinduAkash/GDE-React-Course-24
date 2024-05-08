/*
* Stateless component for the header
* */
function Header() {
  return (
    <header>
        <h1>My Blog</h1>
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