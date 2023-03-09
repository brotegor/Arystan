import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouteLinks } from '../../types';
import { Main } from '../../pages/Main'
import { Auth, Login, Registration } from '../../pages/Auth';
import { Courses } from '../../pages/Cources';
import { Achievements, Activity, Certificates, Profile } from '../../pages/Profile';

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
    {
      path: RouteLinks.PROFILE,
      element: <Profile />,
      children: [
        {
          path: RouteLinks.ACHIEVEMENTS,
          element: <Achievements />
        },
        {
          path: RouteLinks.ACTIVITY,
          element: <Activity />
        },
        {
          path: RouteLinks.CERTIFICATES,
          element: <Certificates />
        }
      ]
    },
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;
