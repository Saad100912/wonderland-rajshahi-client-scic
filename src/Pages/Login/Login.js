import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import "./Login.css";

const Login = () => {
    const { loginUsingGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    const handleLoginUsingGoogle = () => {
        loginUsingGoogle()
            .then((result) => {
                history.push(redirect_uri);
            })
            .finally(setIsLoading(false));
    };

    return (
        <div className="container my-5">
            <div className="login-container">
                <div className="login-form-container">
                    <form className="login-form">
                        <h1>Please login</h1>
                        <p>Email:</p>
                        <input
                            id="email"
                            className="login-form-input"
                            placeholder="Enter your email"
                        />
                        <br />
                        <p>Password:</p>
                        <input
                            className="login-form-input"
                            placeholder="Enter your password"
                        />
                        <br />
                        <br />
                        <input className="login-btn" type="submit" />
                    </form>
                    <small className="login-form-divider">Or login with</small>
                    <div className="login-icons">
                        <img
                            onClick={handleLoginUsingGoogle}
                            src="https://i.ibb.co/RYX7cKq/google-logo.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
