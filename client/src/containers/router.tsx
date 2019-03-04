import React, { Suspense } from 'react';
import { lazy, mount, route } from 'navi';
import { Router as NaviRouter, View } from 'react-navi';

const routes = mount({
  '/': lazy(() => import('../pages')),
  '/about': lazy(() => import('../pages/about')),
});

export const Router = () => (
  <NaviRouter routes={routes}>
    <Suspense fallback={null}>
      <View />
    </Suspense>
  </NaviRouter>
);
