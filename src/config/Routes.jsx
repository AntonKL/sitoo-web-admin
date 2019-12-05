import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PageLayout from '../components/Layout';
import Products from '../scenes/Products';
import Manufactures from '../scenes/Manufactures';
import Users from '../scenes/Users/scenes/ListUsers';
import NotFound from '../scenes/NotFound';

export default () => (
  <PageLayout>
    <Switch>
      <Redirect exact from="/" to="users" />
      <Route exact path="/users" component={Users} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/manufactures" component={Manufactures} />
      <Route component={NotFound} />
    </Switch>
  </PageLayout>
);
