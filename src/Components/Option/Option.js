import React from 'react';
import './Option.css'
const Option = ({ option, handlerOption, notifyForOption }) => {
    return (
        <div onClick={notifyForOption}>
            <div onClick={() => handlerOption(option)} className='option'>
                <p>{'\u2B26'}  {option} </p>
            </div>
        </div>
    );
};

export default Option;