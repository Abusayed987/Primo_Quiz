import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopics from '../QuizTopics/QuizTopics';
import './Home.css'
const Home = () => {
    const quizTopicsApi = useLoaderData()
    const quizTopics = quizTopicsApi.data
    // console.log(quizTopics);
    return (
        <div className='home'>
            <section>
                header !
            </section>
            <h1 className='home-text-style'>Practice Any Quiz!!!</h1>
            <div className='topic-container'>
                {
                    quizTopics.map(quizTopic => <QuizTopics
                        key={quizTopic.id}
                        quizTopic={quizTopic}
                    ></QuizTopics>)
                }
            </div>
        </div>
    );
};

export default Home;