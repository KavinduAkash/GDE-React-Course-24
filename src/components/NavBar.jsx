function NavBar () {
  return (
      <nav>
          <ul style={{display: "flex", listStyle: "none"}}>
              <li style={{margin: "0px 10px"}}><a href="/">Posts</a></li>
              <li style={{margin: "0px 10px"}}><a href="/new">New</a></li>
          </ul>
      </nav>
  );
}

export default NavBar;