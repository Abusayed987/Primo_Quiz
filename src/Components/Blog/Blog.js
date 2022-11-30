import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog'>
            <div>
                <h2>Question: 01 <br /> <br />
                    What's the purpose of React  Router ?
                </h2>
                <p>Ans: The React Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. The main purpose  of library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. </p>
            </div>
            <hr />
            <div>
                <h2>Question: 02 <br /> <br />
                    How Does Context API works ?
                </h2>
                <p>Ans:The Context API is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context API passing data from a parent to a deeply nested child. Context API provides a scalable and simple framework, making it a great way to implement shared data between components And Read that value within any component by using the context consumer. </p>
            </div>
            <hr />
            <div>
                <h2>Question: 03 <br /> <br />
                    What is useRef Hook in React Router?
                </h2>
                <p>Ans: The useRef is one of the many built-in hooks provided by React.It is useful for persisting mutable data between component renders. useHref hook returns a URL that may be used to link to the given to location, even outside of React Router.It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;