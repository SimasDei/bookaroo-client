import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedClass) {
  class AuthenticationCheck extends Component {
    state = {
      loading: true
    };

    render() {
      if (this.state.loading) {
        return (
          <div className="progress transparent ">
            <div className="indeterminate orange" />
          </div>
        );
      }
      return <ComposedClass {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      users: state.users
    };
  }

  return connect(mapStateToProps)(AuthenticationCheck);
}
