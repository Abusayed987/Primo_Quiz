import React from 'react';
import './Option.css'
const Option = ({ option }) => {
    return (
        <div className='option'>
            <p>{'\u2B26'}  {option} </p>
        </div>
    );
};

export default Option;