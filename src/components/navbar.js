import React from "react";
import { Link } from "gatsby";
import "../styles/navbar.css";

const NavBar = () => {
    return (
        <header>
        <nav>
            <div class="navbar">
                <div class="links flex-container">
                    <Link to="/">HOME</Link>
                    <span class="pink-line"></span>
                    <Link to="/projects">PROJECTS</Link>
                    <span class="pink-line"></span>
                    <Link to="/contact">CONTACT</Link>
                    <span class="pink-line"></span>
                    <Link to="/about">ABOUT ME</Link>
                </div>
            </div>
        </nav>
    </header>
    )
};

export default NavBar;