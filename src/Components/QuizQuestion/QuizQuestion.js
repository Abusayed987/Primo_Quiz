import React from 'react';
import Option from '../Option/Option';
import './QuizQuestion.css'
import { EyeIcon } from '@heroicons/react/24/solid'
const QuizQuestion = ({ questionItem, quizQuestionsData }) => {
    const { id, question, options, correctAnswer } = questionItem;
    console.log(options);
    // console.log(quizQuestionsData.data.total);
    return (
        <div className='questionItem'>
            <div className='questionAndAns'>
                <p>Question ?</p>
                <button>
                    <EyeIcon className='ansIcon'></EyeIcon>
                </button>
            </div>
            <p className='question'> <br /> {question} </p>
            <br />
            <div className='option-container'>
                {
                    options.map(option => <Option
                        option={option}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default QuizQuestion;