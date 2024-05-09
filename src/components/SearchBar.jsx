import {useState} from "react";
import {InputGroup, Form, Button} from "react-bootstrap";

function SearchBar() {
    const[searchTerm, setSearchTerm] = useState(null);

    return (
        <div id={"search-bar"}>
            <InputGroup>
                <Form.Control
                    placeholder="Search post"
                    aria-label="Search post"
                    aria-describedby="basic-addon2"
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <Button disabled={!searchTerm} variant="outline-secondary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
        </div>
    );
}

export default SearchBar;