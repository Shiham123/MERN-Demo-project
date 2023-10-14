import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home';
import ErrorPage from '../pages/error';
import InputPerson from '../pages/input';

const routes = createBrowserRouter([
  { path: '/', element: <HomePage />, errorElement: <ErrorPage /> },
  { path: '/person', element: <InputPerson /> },
]);

export default routes;
