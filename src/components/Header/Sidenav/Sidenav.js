import React from 'react';
import NavItems from '../NavItems/NavItems';

const Sidenav = props => {
  return (
    <div>
      <ul className="sidenav" id="mobile-demo">
        <NavItems />
      </ul>
    </div>
  );
};

export default Sidenav;
