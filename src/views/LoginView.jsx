import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../assets/styles/login.css";

function LoginView() {
    return (
        <div>
            <Form id="login">
                <h1 className={"text-center"}>Login</h1>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className={"text-center"}>
                    <Button variant="primary" type="button">
                        Login
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default LoginView;