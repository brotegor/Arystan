import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouteLinks } from '../../types';
import { Main } from '../../pages/Main'
import { Auth, Login, Registration } from '../../pages/Auth';
import { Courses } from '../../pages/Cources';

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
      path: RouteLinks.COURCES,
      element: <Courses />
    },
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;
