import {Link} from "react-router-dom";

function NavBar () {
  return (
      <nav>
          <ul style={{display: "flex", listStyle: "none"}}>
              <li style={{margin: "0px 10px"}}><Link to="/">Posts</Link></li>
              <li style={{margin: "0px 10px"}}><Link to="/new">New</Link></li>
          </ul>
      </nav>
  );
}

export default NavBar;