import { CreateStaticRoute } from './CreateStaticRoute';

const Page404 = lazy(() => import('../../components/layout/NotFoundPage'));

export const NotFoundRoute = CreateStaticRoute({
  path: '/*',
  component: <Page404 />,
});
