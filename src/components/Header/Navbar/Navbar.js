import React from 'react';
import { Link } from 'react-router-dom';
import NavItems from '../NavItems/NavItems';

const Navbar = () => {
  return (
    <nav className="">
      <div className="nav-wrapper ">
        <Link to="/" className="brand-logo" style={{ marginLeft: '16px' }}>
          Bookaroo
        </Link>
        <div
          data-target="mobile-demo"
          className="sidenav-trigger hide-on-med-and-up show-on-medium-and-down"
          style={{ cursor: 'pointer' }}
        >
          <i className="material-icons">menu</i>
        </div>
        <ul className="right hide-on-med-and-down">
          <NavItems />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
