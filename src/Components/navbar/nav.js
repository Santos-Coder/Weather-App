import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink className="nav" activeClassName="active" exact to="/"> Home </NavLink>
            <NavLink className="nav" activeClassName="active" exact to="/weather"> Weather </NavLink>
        </div>
    )
}
export default Navbar;