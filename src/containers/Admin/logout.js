import React from 'react';
import axios from 'axios';

const Logout = props => {
  axios.get('/logout').then(response => props.history.push('/'));
  return (
    <div className="container">
      <h2 className="center-align orange-text">Peace Out</h2>
    </div>
  );
};

export default Logout;
