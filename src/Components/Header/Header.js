import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='navbar'>
            <nav className='navbar-container'>
                <div className='logo'>
                    <Link to='/'>
                        <h3>PrimoQuiz</h3>
                    </Link>
                </div>
                <div className='navlink-container'>
                    <NavLink className={({ isActive }) => isActive ? 'activeLink' : undefined}
                        to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'activeLink' : undefined}
                        to='/statistics'>Statistics</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'activeLink' : undefined}
                        to='/blog'>Blog</NavLink>
                </div>
            </nav>
        </div >
    );
};

export default Header;