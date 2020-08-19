import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PageLoader } from 'components/page-loader';
import { history } from 'lib/react-router/history';

export const AppRouter: React.FC = React.memo(() => (
  <React.Suspense fallback={<PageLoader />}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/register" component={React.lazy(() => import('pages/authentication/register/register'))} />
        <Route path="/login" component={React.lazy(() => import('pages/authentication/login/login'))} />
        <Route path="/station/:slug" component={React.lazy(() => import('pages/station/station'))} />
        <Route path="/profile/:username?" component={React.lazy(() => import('pages/profile/profile'))} />
        <Route path="/stations" component={React.lazy(() => import('pages/home/home'))} />
        <Redirect to="/stations" />
      </Switch>
    </ConnectedRouter>
  </React.Suspense>
));
