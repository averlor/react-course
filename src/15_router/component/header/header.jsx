import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

const Header = () => (
    <div className="header">
        <nav>
            <ul className="nav">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/contacts">Contacts</NavLink></li>
            </ul>
        </nav>
    </div>
);

export default Header