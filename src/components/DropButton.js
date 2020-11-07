import React from 'react';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@szhsin/react-menu/dist/index.css';
import './DropButton.css';

const DropButton = ({ title, item1, item2, item3 }) => {
  const chevronDown = <FontAwesomeIcon icon={faChevronDown} />;

  return (
    <div className="db-wrap">
      <Menu
        className="menu-button"
        menuButton={
          <MenuButton>
            {title} {chevronDown}
          </MenuButton>
        }
      >
        <MenuItem>{item1}</MenuItem>
        <MenuItem>{item2}</MenuItem>
        <MenuItem>{item3}</MenuItem>
        <MenuItem>{item3}</MenuItem>
      </Menu>
    </div>
  );
};

export default DropButton;
