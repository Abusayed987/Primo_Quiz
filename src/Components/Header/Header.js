import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='navbar'>
            <nav className='navbar-container'>
                <div className='logo'>
                    <h3>PrimoQuiz</h3>
                </div>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/quiz'>Quiz</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
            </nav>
        </div >
    );
};

export default Header;