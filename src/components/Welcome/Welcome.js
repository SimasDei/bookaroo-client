import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        style={{
          position: 'fixed',
          right: 0,
          bottom: 0,
          minWidth: '100%',
          minHeight: '100%',
          zIndex: '4'
        }}
      >
        <source src={require('../../resource/Gatsby.mp4')} type="video/mp4" />
      </video>
      <div
        className="overlay"
        style={{
          background: 'rgba(63,57,77, 0.7)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: '5'
        }}
      />

      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          zIndex: 6
        }}
        className="container flex"
      >
        <div>
          <h1
            className="transparent-text"
            id="welcome"
            style={{
              fontFamily: 'Lobster'
            }}
          >
            Welcome
          </h1>
        </div>
        <div>
          <Link
            to="/bookaroo"
            className="waves-effect waves-light btn-large transparent"
            style={{ width: '200px' }}
          >
            Enter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
