import React from "react";
import {ReactComponent as Icon} from '../assets/Landing/Group 3.svg';
import "../css/Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
            <Icon></Icon>
            </div>
            <div className="navbar-buttons">
            <button className="login-button">Login</button>
            <button className="register-button">Register</button>
            </div>
        </div>
    )
}

export default Navbar;