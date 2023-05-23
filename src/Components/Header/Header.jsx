import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/posts">Posts</Link>
            <ActiveLink to="/blog">Blog</ActiveLink>
            <ActiveLink to="/product">Product</ActiveLink>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;