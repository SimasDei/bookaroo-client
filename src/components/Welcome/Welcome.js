import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}
    >
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        style={{
          display: 'block',
          position: 'absolute',
          left: '50%',
          top: '50%',
          overflow: 'hidden',
          transform: ' translate(-50%, -50%)',
          zIndex: 1
        }}
      >
        <source src={require('../../resource/Gatsby.mp4')} type="video/mp4" />
      </video>
      <div
        className="overlay"
        style={{
          background: 'rgba(63,57,77, 0.6)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
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
