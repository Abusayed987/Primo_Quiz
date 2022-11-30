import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='not-found'>
            <img src="https://webdeasy.de/wp-content/uploads/2020/06/404-pages.jpg" alt="not found" />
            <h1>Page Not Found !!!</h1>
            <p>Please check the URL. <br /> <br />
                Otherwise, <Link to='/'>click here </Link> to be redirected to the homepage.
            </p>

        </div>
    );
};

export default NotFound;