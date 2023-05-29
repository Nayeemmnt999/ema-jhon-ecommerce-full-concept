import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contex/UserContex';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className='nav-main'>
            <img src={logo} alt="" />
            <div className='nav-menu'>
                <NavLink to="shop">Shop</NavLink>
                <NavLink to="order">Order Review</NavLink>
                <NavLink to="inventory">Manage Inventory</NavLink>
                {
                    user?.email ? <Link onClick={logOut}>logout</Link>
                        :
                        <>
                            <NavLink to="log-in">Login</NavLink>
                            <NavLink to="signup">Signup</NavLink>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;