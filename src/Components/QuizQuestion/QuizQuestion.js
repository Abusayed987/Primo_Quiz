import React, { useState } from 'react';
import Option from '../Option/Option';
import './QuizQuestion.css'
import { EyeIcon } from '@heroicons/react/24/solid';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const QuizQuestion = ({ questionItem, quizQuestionsData }) => {
    const { id, question, options, correctAnswer } = questionItem;

    // const notifyForEyeBtn = () => toast();
    const notifyForEyeBtn = () => toast.info(`Right Ans: ${correctAnswer}`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const notifyForRightAns = () => toast.success("WoW That's Great!!!", {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const notifyForWrongAns = () => toast.error("Oh So Sad, That's Wrong", {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const handlerOption = (singleOption) => {
        const rightAns = correctAnswer === singleOption;
        if (rightAns) {
            notifyForRightAns()
        }
        else {
            notifyForWrongAns()
        }
    };
    return (
        <div className='questionItem'>
            <div className='questionAndAns'>
                <p>Question ?</p>
                <button onClick={notifyForEyeBtn} >
                    <EyeIcon className='ansIcon'></EyeIcon>
                    <ToastContainer />
                </button>
            </div>
            <p className='question'> <br /> {question} </p>
            <br />
            <div className='option-container'>
                {
                    options.map(option => <Option
                        key={option}
                        option={option}
                        handlerOption={handlerOption}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default QuizQuestion;