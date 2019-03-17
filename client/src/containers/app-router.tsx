import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={React.lazy(() => import('../pages/index'))} />
      <Route path="/about" component={React.lazy(() => import('../pages/about'))} />
      <Route path="/register" component={React.lazy(() => import('../pages/register'))} />
    </Switch>
  </BrowserRouter>
);
