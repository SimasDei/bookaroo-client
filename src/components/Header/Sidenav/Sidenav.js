import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = props => {
  return (
    <div>
      <ul className="sidenav" id="mobile-demo">
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
  );
};

export default Sidenav;
