import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <header className='container'>
                <nav className='header-nav'>
                    {/* header logo */}
                    <img src={logo} alt="" />
                    {/* header nav links */}
                    <div className="nav-links">
                        <a href="./">Home</a>
                        <a href="./Shop">Shop</a>
                        <a href="./Inventory">Manage Inventory</a>
                        <a href="./Order">Order</a>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;