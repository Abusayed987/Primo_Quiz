import React from 'react';
import { Link } from 'react-router-dom';
import './QuizTopics.css'
const QuizTopics = ({ quizTopic }) => {
    // console.log(quizTopic);
    const { id, name, logo, total } = quizTopic;
    return (
        <div className='topic'>
            <div className='topic-details '>
                <img src={logo} alt="" />
                <p className='topic-name'>{name}</p>
            </div>
            <p className='total-quiz'>Total Quiz: {total} </p>
            <Link to={`/quiz/${id}`}>
                <button>Start Quiz!</button>
            </Link>

        </div>
    );
};

export default QuizTopics;