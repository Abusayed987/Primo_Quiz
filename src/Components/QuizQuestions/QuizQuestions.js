import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import './QuizQuestions.css'

const QuizQuestions = () => {
    const quizQuestionsData = useLoaderData();
    const QuizQuestions = quizQuestionsData.data.questions

    // console.log(QuizQuestions);
    return (
        <div className='quiz-questions'>
            <h1 className='quiz-name'>Quiz of {quizQuestionsData.data.name} !</h1>
            <div className='single-question'>
                {
                    QuizQuestions.map(questionItem => <QuizQuestion
                        key={questionItem.id}
                        quizQuestionsData={quizQuestionsData}
                        questionItem={questionItem}
                    ></QuizQuestion>)
                }
            </div>
        </div>
    );
};

export default QuizQuestions;