import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {

    const navStyles ={
        padding:'0 8px'
    }

    return (
    <nav style= { navStyles } className="blue darken-4" >
        <div className="nav-wrapper">
            <Link to="/" className="brand-logo">Movie Quotes</Link>

            <ul className="right">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/public-list">Public List</Link>
                </li>
                <li>
                    <Link to="/secret-list">Secret List</Link>
                </li>
                <li>
                    <Link to="/quotes">Quotes</Link>
                </li>
                <li>
                    <Link to="/sign-in">Sign In</Link>
                </li>
                <li>
                    <Link to="/sign-up">Sign up</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
}
}

export default Nav;
