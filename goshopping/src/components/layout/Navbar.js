import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav-wrapper gray bg-darken-3">
            <div className="container">
                <NavLink to='/' className="brand-logo">goShopping</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
