import React from 'react';
import logo from '../../images/favicon.ico'
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="Logo" />
            <nav>
                <a href="/shop">Show</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;