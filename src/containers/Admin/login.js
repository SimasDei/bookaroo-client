import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    success: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.users.login.isAuth) {
      this.props.history.push('/bookaroo/user');
    }
  }

  submitForm = e => {
    e.preventDefault();
    this.props.dispatch(loginUser(this.state));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let user = this.props.users;
    return (
      <div className="login_container container">
        <form onSubmit={this.submitForm}>
          <h2 className="orange-text center-align">Login</h2>
          {user.login ? (
            <span
              style={{ display: 'flex', marginLeft: '36%' }}
              className="helper-text red-text"
            >
              {user.login.message}
            </span>
          ) : null}
          <div className="row">
            <div className="input-field col s6 orange-text">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="icon_prefix"
                type="email"
                name="email"
                className="validate"
                value={this.state.email}
                onChange={this.onChange}
              />
              <label htmlFor="icon_prefix">Email</label>
            </div>
            <div className="input-field col s6 orange-text">
              <i className="material-icons prefix">lock</i>
              <input
                id="icon_telephone"
                type="password"
                name="password"
                className="validate"
                value={this.state.password}
                onChange={this.onChange}
              />
              <label htmlFor="icon_telephone">Password</label>
            </div>
            <button
              className="waves-effect waves-light btn orange"
              type="submit"
              style={{ display: 'flex', margin: '0 auto', marginTop: '16px' }}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(Login);
