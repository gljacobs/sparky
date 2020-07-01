import React from 'react';
import './style.css';

function Navbar() {
    return (
        <nav id="navbar">
            <div className="nav-wrapper">
                <div className="container">
                    <a href="../" className="brand-logo left blue-grey-text text-darken-3">SPARKY</a>
                    <ul className="center">
                        <li><a className="blue-grey-text text-darken-3" href="/about">About</a></li>
                        <li><a className="blue-grey-text text-darken-3" href="/favorites">Favorites</a></li>
                        <li><a className="blue-grey-text text-darken-3" href="/memorium">Memorium</a></li>
                    </ul>
                    <i className="fas fa-cat right blue-grey-text text-darken-3"></i>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;