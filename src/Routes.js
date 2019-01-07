import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout';
import Home from './components/Home/Home';
import BookView from './components/Book';
import Login from './containers/Admin/login';
import Auth from './hoc/Auth';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home)} />
        <Route path="/login" exact component={Login} />
        <Route path="/books/:id" exact component={BookView} />
      </Switch>
    </Layout>
  );
};

export default Routes;
