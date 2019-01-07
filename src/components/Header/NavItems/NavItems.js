import React from 'react';
import { Link } from 'react-router-dom';

const NavItems = () => {
  return (
    <div>
      <li className="navItem ">
        <Link to="/" className="orange-text">
          <i className="material-icons left">home</i>
          Home
        </Link>
      </li>
      <li className="navItem">
        <Link to="/user" className="orange-text">
          <i className="material-icons left">person</i>
          Profile
        </Link>
      </li>
      <li className="navItem">
        <Link to="/user/register" className="orange-text">
          <i className="material-icons left">assignment</i>
          Add Admins
        </Link>
      </li>
      <li className="navItem">
        <Link to="/login" className="orange-text">
          <i className="material-icons left">power_settings_new</i>
          Login
        </Link>
      </li>
      <li className="navItem">
        <Link to="/user/user-reviews" className="orange-text">
          <i className="material-icons left">rate_review</i>
          My Reviews
        </Link>
      </li>
      <li className="navItem">
        <Link to="/user/add" className="orange-text">
          <i className="material-icons left">playlist_add</i>
          Add Reviews
        </Link>
      </li>
      <li className="navItem">
        <Link to="/user/logout" className="orange-text">
          <i className="material-icons left">exit_to_app</i>
          Logout
        </Link>
      </li>
    </div>
  );
};

export default NavItems;
