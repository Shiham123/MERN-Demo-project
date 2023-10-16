import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home';
import ErrorPage from '../pages/error';
import InputPerson from '../pages/input';
import InputTwo from '../pages/inputTwo';
import LoginPage from '../pages/login';
import UsersPage from '../pages/users';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    loader: () => fetch('http://localhost:3000/person'),
  },
  { path: '/person', element: <InputPerson /> },
  {
    path: '/person/:id',
    element: <InputTwo />,
    loader: ({ params }) => fetch(`http://localhost:3000/person/${params.id}`),
  },
  { path: '/login', element: <LoginPage /> },
  {
    path: '/users',
    element: <UsersPage />,
    loader: () => fetch('http://localhost:3000/user'),
  },
]);

export default routes;
