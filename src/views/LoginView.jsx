import React from "react";
import "../assets/styles/login.css";

function LoginView() {
    return (
        <div>
            <form id="login">
                <h1>Login</h1>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password"/>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginView;