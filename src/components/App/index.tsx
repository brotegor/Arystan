import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouteLinks } from '../../types';
import { Main } from '../../pages/Main'
import { Login } from '../../pages/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: RouteLinks.MAIN,
      element: <Main />
    },
    {
      path: RouteLinks.LOGIN,
      element: <Login />,
    },
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;
