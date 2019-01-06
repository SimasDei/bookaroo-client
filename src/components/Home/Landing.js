import React from 'react';

export default () => {
  return (
    <div
      class="showcase"
      style={{
        minHeight: '100vh',
        background:
          'url(https://images.hellogiggles.com/uploads/2018/08/09140304/picture-of-books-about-books-photo.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="overlay" />
    </div>
  );
};
