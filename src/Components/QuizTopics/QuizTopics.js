import React from 'react';
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
            <button>Start Quiz!</button>
        </div>
    );
};

export default QuizTopics;