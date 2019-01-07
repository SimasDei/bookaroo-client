import React from 'react';

export default () => {
  return (
    <div>
      <div
        className="showcase z-depth-4"
        style={{
          marginTop: '-64px',
          marginBottom: '100px',
          minHeight: '100vh',
          zIndex: '-1',
          background:
            'url(https://images.hellogiggles.com/uploads/2018/08/09140304/picture-of-books-about-books-photo.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
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
            zIndex: '-1'
          }}
        />
        <div className="row" style={{ paddingTop: '200px', zIndex: '10' }}>
          <div className="col s12">
            <h2 className="orange-text center-align">BOOKAROO</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
