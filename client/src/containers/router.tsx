import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/about" component={React.lazy(() => import('pages/about'))} />
      <Route path="/register" component={React.lazy(() => import('pages/authentication/register/register'))} />
      <Route path="/login" component={React.lazy(() => import('pages/authentication/login/login'))} />
      <Route path="/station/:slug" component={React.lazy(() => import('pages/station'))} />
      <Route path="/profile/:username?" component={React.lazy(() => import('pages/profile'))} />
      <Route path="/stations" component={React.lazy(() => import('pages/home'))} />
      <Redirect to="/stations" />
    </Switch>
  </BrowserRouter>
);
