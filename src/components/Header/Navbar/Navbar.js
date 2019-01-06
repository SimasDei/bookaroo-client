import React from 'react';
import { Link } from 'react-router-dom';
import NavItems from '../NavItems/NavItems';

const Navbar = () => {
  return (
    <nav className="purple darken-1 ">
      <div className="nav-wrapper ">
        <Link to="/" className="brand-logo" style={{ marginLeft: '16px' }}>
          Bookaroo
        </Link>
        <a href="/" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <NavItems />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
