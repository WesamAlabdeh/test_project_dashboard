import { CreateStaticRoute } from '@Module/core/components/Routes/CreateStaticRoute';

const LoginPage = lazy(() => import('@Module/auth/pages/login/LoginPage'));

export const AuthRoute = CreateStaticRoute({
  path: '/auth',
  component: <LoginPage />,
});
