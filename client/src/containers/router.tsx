import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={React.lazy(() => import('../pages/home'))} />
      <Route path="/about" component={React.lazy(() => import('../pages/about'))} />
      <Route path="/register" component={React.lazy(() => import('../pages/register'))} />
      <Route path="/station" component={React.lazy(() => import('../pages/station'))} />
    </Switch>
  </BrowserRouter>
);
