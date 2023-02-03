import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouteLinks } from '../../types';
import { Main } from '../../pages/Main'
import { Login } from '../../pages/Login';
import { Profile } from '../../pages/Profile';

function App() {
  const router = createBrowserRouter([
    {
      path: RouteLinks.MAIN,
      element: <Main />
    },
    {
      path: RouteLinks.LOGIN,
      element: <Login />
    },
    {
      path: RouteLinks.PROFILE,
      element: <Profile />
    },
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;
