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
      <Switch>
        <Route path="/simas" component={Welcome} />
        <Route path="/" exact component={Auth(Home)} />
        <Route path="/login" exact component={Login} />
        <Route path="/books/:id" exact component={BookView} />
        <Route path="/user" exact component={Auth(User)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
