import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopics from '../QuizTopics/QuizTopics';
import './Home.css'
const Home = () => {
    const quizTopicsApi = useLoaderData()
    const quizTopics = quizTopicsApi.data
    // console.log(quizTopics);
    return (
        <div>

            <section className='header-section'>
                <div style={{
                    backgroundImage: `url(https://t3.ftcdn.net/jpg/02/64/45/14/240_F_264451404_s4Dhf0mQZdg1N4Gx9RrwfnIIjBiZQ459.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    // width: '100%',
                    height: '100vh%'
                }}>
                    <h1 style={{ color: '#86D3EC', fontSize: '50px' }}>
                        PrimoQuiz..</h1>
                    <p className='header-description'>This PrimoQuiz Website are many Web Development topics related Quiz . If you want to become a HTML, CSS,JavaScript, React and Git  expert then you can take quizzes on this website . Thank You !</p>

                </div>
            </section>
            <div className='home'>
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

        </div>
    );
};

export default Home;