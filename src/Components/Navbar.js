import React from "react"
import logo from '../reactjs-icon.png';
export default function Navbar(){

    return(
        <div>
            <nav className="navbar-items">
                <img src={logo} className="logo"/>
                <h3 className="logo-text">ReactFacts</h3>
                <h4 className="nav-title">React Course - Project 1</h4>
            </nav>
        </div>
        
    )
}