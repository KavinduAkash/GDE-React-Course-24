import {useState} from "react";

function SearchBar() {
    const[searchTerm, setSearchTerm] = useState(null);

    return (
        <div>
            <input type="text" placeholder="Search post"
                   onChange={e => setSearchTerm(e.target.value)}
            />
            <button disabled={!searchTerm}>Search</button>
        </div>
    );
}

export default SearchBar;