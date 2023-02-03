import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouteLinks } from '../../types';
import { Main } from '../../pages/Main'
import { Auth, Login, Registration } from '../../pages/Auth';
import { Lessons } from '../../pages/Lessons';

function App() {
  const router = createBrowserRouter([
    {
      path: RouteLinks.MAIN,
      element: <Main />
    },
    {
      element: <Auth />,
      children: [
        {
          path: RouteLinks.LOGIN,
          element: <Login />
        },
        {
          path: RouteLinks.REGISTRATION,
          element: <Registration />
        }
      ]
    },
    {
      path: RouteLinks.LESSONS,
      element: <Lessons />
    },
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;
