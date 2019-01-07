import React, { Component } from 'react';
import { auth } from '../actions';
import { connect } from 'react-redux';

export default function(ComposedClass) {
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
      } else {
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
