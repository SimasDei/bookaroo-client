import React, { Component } from 'react';
import { auth } from '../actions';
import { connect } from 'react-redux';

export default function(ComposedClass, reload) {
  class AuthenticationCheck extends Component {
    state = {
      loading: true
    };

    componentWillMount() {
      this.props.dispatch(auth());
    }

    componentWillReceiveProps(nextProps) {
      this.setState({ loading: false });

      if (!nextProps.users.login.isAuth) {
        if (reload) {
          this.props.history.push('/bookaroo/login');
        }
      } else {
        if (reload === false) {
          this.props.history.push('/bookaroo/user');
        }
      }
    }

    render() {
      if (this.state.loading) {
        return (
          <div className="progress transparent ">
            <div className="indeterminate orange" />
          </div>
        );
      }
      return <ComposedClass {...this.props} users={this.props.users} />;
    }
  }

  function mapStateToProps(state) {
    return {
      users: state.users
    };
  }

  return connect(mapStateToProps)(AuthenticationCheck);
}
