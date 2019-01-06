import React, { Component } from 'react';
import Sidenav from './Sidenav/Sidenav';
import Navbar from './Navbar/Navbar';

class Header extends Component {
  state = {
    showNav: false
  };

  componentWillMount() {}

  render() {
    return (
      <header>
        <Navbar className="show-on-large" />

        <Sidenav />
      </header>
    );
  }
}

export default Header;
