import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='nav-main'>
            <img src={logo} alt="" />
            <div className='nav-menu'>
                <NavLink to="shop">Shop</NavLink>
                <NavLink to="order">Order Review</NavLink>
                <NavLink to="inventory">Manage Inventory</NavLink>
                <NavLink to="log-in">Login</NavLink>
                <NavLink to="signup">Signup</NavLink>
            </div>
        </div>
    );
};

export default Header;