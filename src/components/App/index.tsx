import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouteLinks } from '../../types';
import { Main } from '../../pages/Main'
import { Auth, Login, Registration } from '../../pages/Auth';

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
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;
