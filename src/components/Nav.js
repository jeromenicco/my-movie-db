import React from 'react';
import DropButton from './DropButton';

import './Nav.css';

const Nav = () => {
  return (
    <div className="nav-wrap">
      <div className="nav-title-wrap">
        <h1 className="nav-title">MOVIEdb</h1>
      </div>
      <div className="button-wrap">
        <DropButton
          title="Categories"
          item1="Horror"
          item2="Comedies"
          item3="Romance"
        />
        <DropButton
          title="Search by"
          item1="By rate"
          item2="By year"
          item3="By popularity"
        />
      </div>
    </div>
  );
};

export default Nav;
