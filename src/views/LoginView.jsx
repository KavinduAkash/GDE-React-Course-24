import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../assets/styles/login.css";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {loginUser, logoutUser} from "../redux/UserActions.js";
import {useNavigate} from "react-router-dom";

const userList = [{id: 1, email: 'jhonedeo@gmail.com', password: '123'}, {
    id: 2,
    email: 'jackd@yahoo.com',
    password: '1234'
}];

function LoginView() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        let user = userList.filter(user => user.email == email && user.password == password);
        if (user[0]) {
            console.log("user[0]", user[0]);
            dispatch(loginUser(user[0]));
            navigate("/");
        } else {
            alert('Invalid email or password');
        }
    }

    return (
        <div>
            <Form id="login">
                <h1 className={"text-center"}>Login</h1>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
                <div className={"text-center"}>
                    <Button variant="primary" type="button" onClick={login}>
                        Login
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default LoginView;