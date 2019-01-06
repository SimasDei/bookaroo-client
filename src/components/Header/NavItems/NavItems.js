import React from 'react';
import { Link } from 'react-router-dom';

const NavItems = () => {
  return (
    <div>
      <li className="navItem">
        <Link to="/" className="truncate">
          <i className="material-icons left">home</i>
          Home
        </Link>
      </li>
      <li className="navItem">
        <Link to="/user">
          <i className="material-icons left">person</i>
          Profile
        </Link>
      </li>
      <li className="navItem">
        <Link to="/user/register">
          <i className="material-icons left">assignment</i>
          Add Admins
        </Link>
      </li>
      <li className="navItem">
        <Link to="/login">
          <i className="material-icons left">power_settings_new</i>
          Login
        </Link>
      </li>
      <li className="navItem">
        <Link to="/user/user-reviews">
          <i className="material-icons left">rate_review</i>
          My Reviews
        </Link>
      </li>
      <li className="navItem">
        <Link to="/user/add">
          <i className="material-icons left">playlist_add</i>
          Add Reviews
        </Link>
      </li>
      <li className="navItem">
        <Link to="/user/logout">
          <i className="material-icons left">exit_to_app</i>
          Logout
        </Link>
      </li>
    </div>
  );
};

export default NavItems;
