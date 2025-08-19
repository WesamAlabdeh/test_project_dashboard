


import React from 'react';
import { RoutesType } from '@Module/core/types/route';
import { FcDataProtection } from 'react-icons/fc';
import { FaTasks, FaUser } from 'react-icons/fa';

const UserPage = React.lazy(
  () => import('@Module/task/pages/user/page'),
);

const UserShowPage = React.lazy(
  () => import('@Module/task/pages/user/showPage'),
);

const TasksPage = React.lazy(
  () => import('@Module/task/pages/tasks/page'),
);

const TasksShowPage = React.lazy(
  () => import('@Module/task/pages/tasks/TasksShowPage'),
);

export const taskRoutes: RoutesType[] = [

  {
    path: '/user',
    name: 'user',
    icon: <FaUser />,
    element: <UserPage />,
  },
  {
    path: '/user/show/:id',
    element: <UserShowPage />,
  },
  {
    path: '/tasks',
    name: 'tasks',
    icon: <FaTasks />,
    element: <TasksPage />,
  },
  {
    path: '/tasks/show/:id',
    element: <TasksShowPage />,
  },
];

