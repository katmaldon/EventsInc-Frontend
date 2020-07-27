import React from 'react';

const NavBar = () => {

    return (
        <div className="navbar">
            <div to="/login">login</div>
            <div to="/">home</div>
            <div to="/events">events</div>
            <div to="/about">about</div>
        </div>
    )
}
export default NavBar;
