import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import SpinContainer from '@Module/core/components/layout/SpinContainer';
import { RoutesType, ViewRoutesType } from '@Module/core/types/route';
import Layout from '../layout/Layout';
import { hasAbility } from '@Module/core/utils/fn/hasAbility';
import {
  ABILITIES_ENUM,
  ABILITIES_VALUES_ENUM,
} from '@Module/core/enums/Abilities';

const RenderRoutesRecursively = (routes: RoutesType[]) =>
  routes.map((route: RoutesType, index: number) => {
    const isViewRoutesType = (item: RoutesType): item is ViewRoutesType => {
      return (item as ViewRoutesType).path !== undefined;
    };
    const useAbility = hasAbility(
      route.abilities ?? ABILITIES_ENUM.PASS,
      route.abilities_value ?? ABILITIES_VALUES_ENUM.INDEX,
    );

    if (!useAbility) {
      return false;
    }
    return (
      <React.Fragment key={index}>
        {isViewRoutesType(route) && route.element && (
          <Route
            path={route.path}
            element={
              <Suspense
                fallback={
                  route.withOutLayout ? (
                    <SpinContainer />
                  ) : (
                    <Layout>
                      <SpinContainer />
                    </Layout>
                  )
                }
              >
                {route.withOutLayout ? (
                  route.element
                ) : (
                  <Layout>{route.element}</Layout>
                )}
              </Suspense>
            }
          />
        )}

        {'children' in route && RenderRoutesRecursively(route.children)}
      </React.Fragment>
    );
  });

export default RenderRoutesRecursively;
