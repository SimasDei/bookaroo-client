import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout';
import Home from './components/Home/Home';
import BookView from './components/Book';
import Login from './containers/Admin/login';
import Auth from './hoc/Auth';
import User from './components/Admin/index';
import Welcome from './components/Welcome/Welcome';

const Routes = () => {
  return (
    <Layout>
      <Route path="/" exact component={Auth(Welcome)} />
      <Switch>
        <Route path="/bookaroo" exact component={Auth(Home)} />
        <Route path="/bookaroo/login" exact component={Auth(Login)} />
        <Route path="/bookaroo/books/:id" exact component={Auth(BookView)} />
        <Route path="/bookaroo/user" exact component={Auth(User)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
