import React from 'react';
import { Link } from 'react-router-dom';
import NavItems from '../NavItems/NavItems';

const Navbar = () => {
  return (
    <div className="navbar-fixed" style={{ zIndex: '1' }}>
      <nav className="transparent">
        <div className="nav-wrapper">
          <Link
            to="/bookaroo"
            className="brand-logo orange-text"
            style={{ marginLeft: '16px' }}
          >
            Bookaroo
          </Link>
          <div
            data-target="mobile-demo"
            className="sidenav-trigger hide-on-med-and-up show-on-medium-and-down"
            style={{ cursor: 'pointer' }}
          >
            <i className="material-icons orange-text">menu</i>
          </div>
          <ul className="right hide-on-med-and-down">
            <NavItems />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
