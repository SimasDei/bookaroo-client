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
        className=" col s12"
        style={{
          position: 'fixed',
          display: 'block',
          margin: '0 40%',
          zIndex: 6,
          paddingTop: '19%'
        }}
      >
        <h1
          className="transparent-text"
          id="welcome"
          style={{
            fontFamily: 'Lobster'
          }}
        >
          Welcome
        </h1>
        <Link
          to="/"
          style={{ display: 'block', margin: '0 auto' }}
          className="waves-effect waves-light btn-large transparent"
        >
          Enter
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
