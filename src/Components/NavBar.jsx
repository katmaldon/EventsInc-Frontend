import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="navbar">
            <Link to="/login">login</Link>
            <Link to="/">home</Link>
            <Link to="/events">events</Link>
            <Link to="/about">about</Link>
        </div>
    )
}
export default NavBar;
