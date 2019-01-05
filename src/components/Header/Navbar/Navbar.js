import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Bookaroo
        </Link>
        <a href="/" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">Javascript</a>
          </li>
          <li>
            <a href="mobile.html">Mobile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
