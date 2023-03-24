import React from 'react'
import "./navbar.css"
import logo from "../assets/C_Devops.png"

const navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <img className="shop-logo_c" src={logo} alt="/"/>
                
            </div>
        </div>
    );
}

export default navbar
