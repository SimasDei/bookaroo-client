import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout';
import Home from './components/Home/Home';
import BookView from './components/Book';
import Login from './containers/Admin/login';
import Logout from './containers/Admin/logout';
import Auth from './hoc/Auth';
import User from './components/Admin/index';
import Welcome from './components/Welcome/Welcome';
import AddBook from './containers/Admin/add';
import EditBook from './containers/Admin/edit';
import UserPosts from './components/Admin/userPosts';
import Register from './containers/Admin/register';

const Routes = () => {
  return (
    <Layout>
      <Route path="/" exact component={Auth(Welcome, null)} />
      <Switch>
        <Route path="/bookaroo" exact component={Auth(Home, null)} />
        <Route path="/bookaroo/login" exact component={Auth(Login, false)} />
        <Route
          path="/bookaroo/user/logout"
          exact
          component={Auth(Logout, true)}
        />

        <Route
          path="/bookaroo/books/:id"
          exact
          component={Auth(BookView, null)}
        />
        <Route
          path="/bookaroo/user/register"
          exact
          component={Auth(Register, true)}
        />
        <Route path="/bookaroo/user" exact component={Auth(User, true)} />
        <Route
          path="/bookaroo/user/add"
          exact
          component={Auth(AddBook, true)}
        />
        <Route
          path="/bookaroo/user/edit-post/:id"
          exact
          component={Auth(EditBook, true)}
        />
        <Route
          path="/bookaroo/user/user-reviews"
          exact
          component={Auth(UserPosts, true)}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
