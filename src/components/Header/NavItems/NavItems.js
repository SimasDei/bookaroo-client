import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavItems extends Component {
  state = {
    isAuth: false
  };

  componentWillReceiveProps(nextProps) {
    let user = nextProps.user;
    if (user && user.login.isAuth === true) {
      this.setState({ isAuth: true });
    }
  }

  render() {
    return (
      <div>
        <li className="navItem ">
          <Link to="/bookaroo" className="orange-text">
            <i className="material-icons left">home</i>
            Home
          </Link>
        </li>

        {this.state.isAuth ? (
          <li className="navItem">
            <Link to="/bookaroo/user" className="orange-text">
              <i className="material-icons left">person</i>
              Profile
            </Link>
          </li>
        ) : null}

        {this.state.isAuth ? (
          <li className="navItem">
            <Link to="/bookaroo/user/register" className="orange-text">
              <i className="material-icons left">assignment</i>
              Add Admins
            </Link>
          </li>
        ) : null}

        {this.state.isAuth ? (
          <li className="navItem">
            <Link to="/bookaroo/user/user-reviews" className="orange-text">
              <i className="material-icons left">rate_review</i>
              My Reviews
            </Link>
          </li>
        ) : null}

        {this.state.isAuth ? (
          <li className="navItem">
            <Link to="/bookaroo/user/add" className="orange-text">
              <i className="material-icons left">playlist_add</i>
              Add Reviews
            </Link>
          </li>
        ) : null}

        {this.state.isAuth ? (
          <li className="navItem">
            <Link to="/bookaroo/user/logout" className="orange-text">
              <i className="material-icons left">exit_to_app</i>
              Logout
            </Link>
          </li>
        ) : null}

        <li className="navItem">
          <Link to="/bookaroo/login" className="orange-text">
            <i className="material-icons left">power_settings_new</i>
            Login
          </Link>
        </li>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users,
    isAuth: state.isAuth
  };
}

export default connect(mapStateToProps)(NavItems);
