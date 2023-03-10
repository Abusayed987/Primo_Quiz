import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import NotFound from './Components/NotFound/NotFound';
import QuizQuestions from './Components/QuizQuestions/QuizQuestions';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/quiz/:quizId', element: <QuizQuestions></QuizQuestions>,
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          }
        },
        {
          path: '/statistics', element: <Statistics></Statistics>,
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
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
