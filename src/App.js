import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import Quizs from './Components/Quizs/Quizs';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import NotFound from './Components/NotFound/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        { path: '/quiz', element: <Quizs></Quizs> },
        { path: '/statistics', element: <Statistics></Statistics> },
        { path: '/blog', element: <Blog></Blog> },
        { path: '*', element: <NotFound></NotFound> }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
