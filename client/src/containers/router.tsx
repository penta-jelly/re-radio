import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PageLoader } from 'components/page-loader';

export const AppRouter: React.FC = React.memo(() => (
  <React.Suspense fallback={<PageLoader />}>
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={React.lazy(() => import('pages/authentication/register'))} />
        <Route path="/login" component={React.lazy(() => import('pages/authentication/login'))} />
        <Route path="/station/:slug" component={React.lazy(() => import('pages/station'))} />
        <Route path="/profile/:username?" component={React.lazy(() => import('pages/profile'))} />
        <Route path="/stations" component={React.lazy(() => import('pages/home'))} />
        <Redirect to="/stations" />
      </Switch>
    </BrowserRouter>
  </React.Suspense>
));
