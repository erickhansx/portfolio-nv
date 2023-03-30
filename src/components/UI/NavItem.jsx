import React, { useState } from 'react';
import classes from './Navbar.module.scss';
import { BiPlus } from 'react-icons/bi';

const NavItem = (props) => {
  const [open, setOpen] = useState(true);
  const style = {
    transform: open ? 'rotate(135deg)' : '',
    transition: 'transform 500ms ease',
  };
  const contentStyle = {
    maxHeight: open ? '1000px' : '0px',
    overflow: 'hidden',
    transition: 'max-height 500ms ease',
  };
  return (
    <>
      <li className={classes['menu-button']} onClick={() => setOpen(!open)}>
        <div className={classes['menu-close']}>
          <span>MENU</span>
          <BiPlus style={style} />
        </div>
        <li style={contentStyle}>{props.children}</li>
      </li>
    </>
  );
};

export default NavItem;
