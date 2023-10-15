import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home';
import ErrorPage from '../pages/error';
import InputPerson from '../pages/input';
import InputTwo from '../pages/inputTwo';
import LoginPage from '../pages/login';

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
]);

export default routes;
