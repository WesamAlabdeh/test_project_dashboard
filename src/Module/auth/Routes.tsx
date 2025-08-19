import {
  ABILITIES_ENUM,
  ABILITIES_VALUES_ENUM,
} from '@Module/core/enums/Abilities';
import { RoutesType } from '@Module/core/types/route';
import React from 'react';
const LoginPage = React.lazy(
  () => import('@Module/auth/pages/login/LoginPage'),
);

export const AuthRoutes: RoutesType[] = [
  {
    path: '/auth',
    element: <LoginPage />,
    abilities: ABILITIES_ENUM.PASS,
    abilities_value: ABILITIES_VALUES_ENUM.INDEX,
    withOutLayout: true,
  },
];
