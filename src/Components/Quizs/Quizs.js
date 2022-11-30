import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quizs.css'
const Quizs = () => {
    const quizData = useLoaderData();
    console.log(quizData);
    return (
        <div className='quizs'>
            <h4>This is Quizs </h4>
        </div>
    );
};

export default Quizs;