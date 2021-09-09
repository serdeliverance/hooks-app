import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <NavLink exact activeClassName="active" to="/" className="navbar-brand" href="#">useContext</NavLink>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink exact activeClassName="active" to="/" className="nav-NavLink" href="#">Home</NavLink>
                <NavLink exact activeClassName="active" to="/about" className="nav-NavLink" href="#">About</NavLink>
                <NavLink exact activeClassName="active" to="/login" className="nav-NavLink">Login</NavLink>
            </div>
            </div>
        </div>
        </nav>
    )
}
