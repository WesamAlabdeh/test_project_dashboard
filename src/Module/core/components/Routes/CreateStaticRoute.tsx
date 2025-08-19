import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import SpinContainer from '@Module/core/components/layout/SpinContainer';

interface StaticRouteProps {
  path: string;
  component: React.ReactNode;
  fallback?: React.ReactNode;
}

export const CreateStaticRoute = ({
  path,
  component,
  fallback = <SpinContainer />,
}: StaticRouteProps) => {
  return (
    <Route
      path={path}
      element={<Suspense fallback={fallback}>{component}</Suspense>}
    />
  );
};
