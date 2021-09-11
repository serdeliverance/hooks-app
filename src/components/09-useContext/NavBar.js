import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">useContext</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-NavLink">Home</Link>
                        <Link to="/about" className="nav-NavLink">About</Link>
                        <Link to="/login" className="nav-NavLink">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
