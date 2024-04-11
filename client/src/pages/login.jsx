import React, { useEffect, useState } from 'react';
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        const wrapper = document.querySelector('.wrapper');
        const loginLink = document.querySelector('.login-link');
        const registerLink = document.querySelector('.register-link');

        const handleRegisterClick = () => {
            wrapper.classList.add('active');
        }

        const handleLoginClick = () => {
            wrapper.classList.remove('active');
        }

        registerLink.addEventListener('click', handleRegisterClick);
        loginLink.addEventListener('click', handleLoginClick);

        // Cleanup function to remove event listener on unmount
        return () => {
            registerLink.removeEventListener('click', handleRegisterClick);
            loginLink.removeEventListener('click', handleLoginClick);
        };
    }, []); // Empty dependency array ensures that this effect runs only once after the initial render

    const [loginInputs, setLoginInputs] = useState({});
    const [registerInputs, setRegisterInputs] = useState({});

    const handleLoginChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLoginInputs(prevState => ({ ...prevState, [name]: value }));
    }

    const handleRegisterChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegisterInputs(prevState => ({ ...prevState, [name]: value }));
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Your login logic goes here
        console.log("Login form submitted:", loginInputs);
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        // Your registration logic goes here
        console.log("Register form submitted:", registerInputs);
    
        axios.post('https://localhost:80/api/', registerInputs)
            .then(response => {
                console.log(response.data);
                // If you want to navigate after successful registration
                navigate("/");
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }

    return (
        <div className='loginimg'>
            <header>
                <nav className="navigation">
                    {/* Navigation content */}
                </nav>
            </header>
            <div className="wrapper">
                <span className="icon-close">
                    <ion-icon name="close"></ion-icon>
                </span>
                <div className="form-box login">
                    <h2>Login</h2>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail-unread"></ion-icon></span>
                            <input type="email" required name="loginEmail" onChange={handleLoginChange} />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                            <input type="password" required name="loginPassword" onChange={handleLoginChange} />
                            <label>Password</label>
                        </div>
                        <div className="forgot-password">
                            <label><input type="checkbox" />
                                Remember me
                            </label>
                            <a href="#">Forgot Password</a>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="login-register">
                            <p>Don't have an account?
                                <a href="#" className="register-link">Register</a>
                            </p>
                        </div>
                    </form>
                </div>
                <div id="registrationform" className="form-box Register">
                    <h2>Registration</h2>
                    <form onSubmit={handleRegisterSubmit}>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="person"></ion-icon></span>
                            <input type="text" required name="registerUsername" onChange={handleRegisterChange} />
                            <label>Username</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="calendar"></ion-icon></span>
                            <input type="text" required placeholder="dd/mm/yy" name="registerDob" onChange={handleRegisterChange} />
                            <label>DOB</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail-unread"></ion-icon></span>
                            <input type="email" required name="registerEmail" onChange={handleRegisterChange} />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                            <input type="password" required name="registerPassword" onChange={handleRegisterChange} />
                            <label>Password</label>
                        </div>
                        <div className="forgot-password">
                            <label><input type="checkbox" />
                                I agree to the terms & conditions
                            </label>
                        </div>
                        <button type="submit" className="btn">Register</button>
                        <div className="login-register">
                            <p>Already have an account?
                                <a href="#" className="login-link">Login</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            {/* Script tags are removed */}
        </div>
    );
}

export default Login;
