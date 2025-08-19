import { FaHome } from 'react-icons/fa';
import { RoutesType } from './Module/core/types/route';

// product pa
import { AuthRoutes } from '@Module/auth/Routes';
import HomePage from '@Module/core/pages/HomePage';
import { taskRoutes } from '@Module/task/Routes';

export const BaseRoute: RoutesType[] = [
  // product page
  {
    name: 'Home Page',
    path: '/',
    icon: <FaHome />,
    element: <HomePage />,
  },
  ...AuthRoutes,
  ...taskRoutes,
];
