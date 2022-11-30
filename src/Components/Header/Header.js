import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='navbar'>
            <nav className='navbar-container'>
                <div className='logo'>
                    <h3>PrimoQuiz</h3>
                </div>
                <div>
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