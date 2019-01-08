import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Landing extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          className="showcase z-depth-5"
          style={{
            marginTop: '-64px',
            marginBottom: '100px',
            minHeight: '100vh',
            zIndex: '-1',
            background:
              'url(https://images.hellogiggles.com/uploads/2018/08/09140304/picture-of-books-about-books-photo.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            position: 'relative'
          }}
        >
          <div
            className="overlay"
            style={{
              background: 'rgba(227,197,168, 0.4)',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              zIndex: '-1'
            }}
          />
          <div
            className="row container"
            style={{ paddingTop: '200px', zIndex: '2' }}
          >
            <div className="col s8 offset-s2">
              <h1
                className="orange-text center-align"
                style={{ fontFamily: 'Lobster' }}
              >
                Bookaroo
              </h1>
            </div>
          </div>
        </div>

        {!this.props.users.login.isAuth ? (
          <div
            className="row"
            style={{ zIndex: '1', marginTop: '-500px', marginBottom: '500px' }}
          >
            <Link
              className="hoverable waves-effect waves-light btn-large orange col s3 offset-s3"
              to="/bookaroo/login"
            >
              Log In
            </Link>
            <Link
              className="hoverable waves-effect waves-light btn-large orange col s3"
              to="/bookaroo/"
            >
              Sign Up
            </Link>
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(Landing);
